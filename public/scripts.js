// Book Viewer ====== ======================================================= //

// Keep the current page in a hidden tracker
const tracker = document.getElementById('tracker');

const Book = {
  book: document.getElementById('book'),
  currentContent: document.querySelector('.book .book-content'),
  content: {
    0: [],
    1: [
      '&emsp;Lucas e Pedro são grandes amigos desde o jardim de infância.',
      '&emsp;Em um manhã ensolarada, eles saíram para brincar no quintal.',
    ],
    2: [
      '&emsp;Lucas, gostava muito de apostar corridas com seu carrinho super equipado.',
      '&emsp;Já Pedro, adorava brincar de bombeiro com o seu caminhãozinho!',
    ],
    3: [
      '&emsp;Os amigos se divertiram por horas, e foi então que Lucas fez um desafio:',
      '&emsp;— Eu duvido que você consegue dirigir até o portão e voltar antes de mim!',
      '&emsp;Pedro disse que o caminhão de bombeiros era mais rápido, já que precisava salvar vidas.',
    ],
    4: [
      '&emsp;Enquanto os meninos se preparavam para a corrida, começou a chover!',
      '&emsp;Pedro então disse:',
      '&emsp;— Rápido! Vamos voltar de carona no meu caminhão, tem espaço pra mais um.',
    ],
    5: [
      '&emsp;Juntos, eles conseguiram chegar em casa a tempo.',
      '&emsp;Bem na hora de almoçar!',
    ],
  },
  fillBook(bookContent) {
    // clear previous paragraphs
    Book.currentContent.innerHTML = '';

    // for every item in the array
    for (const p of bookContent) {
      const paragraph = document.createElement('p');

      paragraph.innerHTML = p;
      Book.currentContent.appendChild(paragraph);
    }
  },
  setImage() {
    // clear previous paragraphs
    Book.currentContent.innerHTML = '';

    Book.currentContent.style.background =
      'url("/books/book1-b.svg") no-repeat center center';
    Book.currentContent.style.backgroundSize = 'cover';
  },
  changePage(arrowButton, totalPages) {
    const currentPage = +tracker.value;

    // select the new div based in the arrowButton id
    const newPage =
      arrowButton.id === 'left' ? currentPage - 1 : currentPage + 1;

    // first and last pages special cases
    if (newPage < 0 || newPage > totalPages) return;

    if (newPage > 0) {
      if (currentPage === 0) Book.currentContent.style.background = '';
      // filling the book with <p> tags
      Book.fillBook(Book.content[newPage]);
    } else {
      Book.setImage();
    }

    // update tracker value
    tracker.value = newPage;
  },
};

// Speech Recognition ======================================================= //

// Moz | Webkit
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var triggerWords = ['ensolarada', 'carrinho', 'caminhão', 'chover', 'casa'];

// Standard JSGF grammar
var grammar = `#JSGF V1.0; grammar phrase; public <phrase> = (${triggerWords.join(
  ' | '
)});`;

var bookContainer = document.querySelector('main');

// Create new instance of SpeechRecognition and SpeechGrammarList
var recognition = new SpeechRecognition();
var speechRecognitionGrammarList = new SpeechGrammarList();

var fatalError = false;
var totalTexts = '';

function testSpeech() {
  // Grammar that will be recognised by the SpeechRecognition instance
  speechRecognitionGrammarList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionGrammarList;
  recognition.lang = 'pt-BR'; // Language

  // Continuous evaluation of the audio provided by the user
  recognition.continuous = true;
  recognition.interimResults = true;

  if (fatalError) return;
  recognition.start();

  recognition.onresult = function (event) {
    // Returns the result of the LAST recognized word/phrase
    var speechResult = event.results[event.results.length - 1][0].transcript
      .toLowerCase()
      .trim();

    if (event.results[event.results.length - 1].isFinal) {
      totalTexts += `${speechResult}\n`;
      console.log('Final text: ' + totalTexts);
    }

    console.log('Speech received: ' + speechResult + '.');

    // Check the similarity between the recognized text and the original
    speechResult = speechResult.split(' ');
    for (var triggerWord of triggerWords) {
      for (var resultWord of speechResult) {
        var similarity = textCosineSimilarity(resultWord, triggerWord);

        // Take actions if the similarity is greater than 70%
        if (similarity >= 0.7) {
          if (+tracker.value === 1 && triggerWord === 'ensolarada') {
            bookContainer.style.backgroundImage =
              'url("/animations/enviroment/birds1.gif")';
            setTimeout(() => {
              bookContainer.style.backgroundImage =
                'url("/animations/standard.jpg")';
            }, 5000);
          } else if (+tracker.value === 2 && triggerWord === 'carrinho') {
            playCar();
            hasPlayedCar = true;
          } else if (+tracker.value === 3 && triggerWord === 'caminhão') {
            playTruck();
            hasPlayedTruck = true;
          } else if (+tracker.value === 4 && triggerWord === 'chover') {
            bookContainer.style.backgroundImage =
              'url("/animations/enviroment/rain.gif")';
            setTimeout(() => {
              bookContainer.style.backgroundImage =
                'url("/animations/standard.jpg")';
            }, 5000);
          } else if (+tracker.value === 5 && triggerWord === 'casa') {
            playHouse();
            hasPlayedHouse = true;
          }

          console.log('I heard the correct phrase! ' + speechResult);

          // Similarity between words/phrases
          console.log('Compared similarity: ' + similarity);

          // Results reliability
          // console.log(
          // 'Confidence: ' +
          // event.results[event.results.length - 1][0].confidence
          // );
        }
      }
    }
  };

  // Error handling
  recognition.onerror = function (event) {
    console.log('Error occurred in recognition: ' + event.error);
    if (event.error === 'not-allowed' || event.error === 'network')
      fatalError = true;
  };

  recognition.onaudiostart = function (event) {
    // Fired when the user agent has started to capture audio.
    console.log('SpeechRecognition.onaudiostart');
  };

  recognition.onaudioend = function (event) {
    // Fired when the user agent has finished capturing audio.
    console.log('SpeechRecognition.onaudioend');
  };

  // When recognition is finished, start a new one
  recognition.onend = function (event) {
    // Fired when the speech recognition service has disconnected.
    console.log('SpeechRecognition.onend');
    testSpeech();
  };

  recognition.onnomatch = function (event) {
    // Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
    console.log('SpeechRecognition.onnomatch');
  };

  recognition.onsoundstart = function (event) {
    // Fired when any sound — recognisable speech or not — has been detected.
    console.log('SpeechRecognition.onsoundstart');
  };

  recognition.onsoundend = function (event) {
    // Fired when any sound — recognisable speech or not — has stopped being detected.
    console.log('SpeechRecognition.onsoundend');
  };

  recognition.onspeechstart = function (event) {
    // Fired when sound that is recognised by the speech recognition service as speech has been detected.
    console.log('SpeechRecognition.onspeechstart');
  };

  recognition.onstart = function (event) {
    // Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
    console.log('SpeechRecognition.onstart');
  };
}

var hasPlayedCar = false;
function playCar() {
  if (!hasPlayedCar) {
    window.anime({
      targets: '.car-img',
      translateX: [-100, 1800],
      duration: 5000,
      loop: false,
      autoplay: true,
      easing: 'linear',
    });
  }
}

var hasPlayedTruck = false;
function playTruck() {
  if (!hasPlayedTruck) {
    window.anime({
      targets: '.firetruck-img',
      translateX: [100, -2200],
      duration: 5000,
      loop: false,
      autoplay: true,
      easing: 'linear',
    });
  }
}

var hasPlayedHouse = false;
function playHouse() {
  if (!hasPlayedHouse) {
    window.anime({
      targets: '.house-img',
      translateX: [-100, 1150],
      delay: 500,
      duration: 5000,
      autoplay: true,
      direction: 'alternate',
    });
  }
}

function termFreqMap(str) {
  var words = str.split(' ');
  var termFreq = {};
  words.forEach(function (w) {
    termFreq[w] = (termFreq[w] || 0) + 1;
  });
  return termFreq;
}

function addKeysToDict(map, dict) {
  for (var key in map) {
    dict[key] = true;
  }
}

function termFreqMapToVector(map, dict) {
  var termFreqVector = [];
  for (var term in dict) {
    termFreqVector.push(map[term] || 0);
  }
  return termFreqVector;
}

function vecDotProduct(vecA, vecB) {
  var product = 0;
  for (var i = 0; i < vecA.length; i++) {
    product += vecA[i] * vecB[i];
  }
  return product;
}

function vecMagnitude(vec) {
  var sum = 0;
  for (var i = 0; i < vec.length; i++) {
    sum += vec[i] * vec[i];
  }
  return Math.sqrt(sum);
}

function cosineSimilarity(vecA, vecB) {
  return vecDotProduct(vecA, vecB) / (vecMagnitude(vecA) * vecMagnitude(vecB));
}

// Final function to compare strings
function textCosineSimilarity(strA, strB) {
  var termFreqA = termFreqMap(strA);
  var termFreqB = termFreqMap(strB);

  var dict = {};
  addKeysToDict(termFreqA, dict);
  addKeysToDict(termFreqB, dict);

  var termFreqVecA = termFreqMapToVector(termFreqA, dict);
  var termFreqVecB = termFreqMapToVector(termFreqB, dict);

  return cosineSimilarity(termFreqVecA, termFreqVecB);
}

// Clean the words/sentences
function regex(str) {
  return str
    .replace(
      /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,
      ''
    )
    .toLowerCase();
}

document.addEventListener('DOMContentLoaded', event => {
  Book.setImage();
  testSpeech();
});
