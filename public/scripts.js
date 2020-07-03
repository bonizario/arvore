const Book = {
  book: document.getElementById('book'),
  content: {
    1: [
      '1.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '1.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '1.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    2: [
      '2.1 Lorem ipsum dolorasdsdfasdfasd sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '2.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '2.3 Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    3: [
      '3.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '3.2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '3.3Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    4: [
      '4.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '4.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '4.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    5: [
      '5.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '5.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '5.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    6: [
      '6.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '6.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '7.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    7: [
      '7.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '7.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '7.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    8: [
      '8.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '8.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '8.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    9: [
      '9.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '9.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '9.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    10: [
      '10.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '10.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '10.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    11: [
      '11.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '11.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '11.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    12: [
      '12.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '12.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '12.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    13: [
      '13.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '13.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '13.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    14: [
      '14.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '14.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '14.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    15: [
      '15.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '15.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '15.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    16: [
      '16.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '16.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '16.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    17: [
      '17.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sapiente nesciunt explicabo fugiat? Harum omnis laudantium ex, minus delectus nulla quam? Maxime dolores cupiditate fugiat!',
      '17.2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore temporibus optio necessitatibus hic accusamus quae deserunt repellat. Neque distinctio. Nesciunt, ut aliquid.',
      '17.3 Lorem ipsum dolor sit amet. Corrupti molestiae, commodi placeat voluptates corporis ullam ea non magni tenetur eligendi provident saepe repellendus possimus voluptatibus ipsum quam alias accusantium quibusdam?',
    ],
    18: [''],
  },
  fillBook(bookContent) {
    const currentContent = document.querySelector('.book .book-content');
    // clear previous paragraphs
    currentContent.innerHTML = '';

    // for every item in the array
    for (const p of bookContent) {
      const paragraph = document.createElement('p');

      paragraph.innerHTML = p;
      currentContent.appendChild(paragraph);
    }
  },
  changePage(arrowButton, totalPages) {
    // keep the current page in a hidden tracker
    const tracker = document.getElementById('tracker');
    const currentPage = +tracker.value;

    // select the new div based in the arrowButton id
    const newPage =
      arrowButton.id === 'left' ? currentPage - 1 : currentPage + 1;

    // first and last pages special cases
    if (newPage < 1 || newPage > totalPages) return;

    // filling the book with <p> tags
    Book.fillBook(Book.content[newPage]);

    // update tracker value
    tracker.value = newPage;
  },
};

document.addEventListener('DOMContentLoaded', event => {
  Book.fillBook(Book.content[1]);
});
