import React from 'react'

const ListingMusic = () => {
  return (
    <>
    <div className="book-store">
  <div className="header">
    <div className="browse">
      <div className="browse-category">
        Browse Category
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-down"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Book" />
      </div>
    </div>
    <div className="header-title">
      read<span>books</span>
    </div>
    <div className="profile">
      <div className="user-profile">
        <img
          src="https://randomuser.me/api/portraits/women/63.jpg"
          alt=""
          className="user-img"
        />
      </div>
      <div className="profile-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
        Menu
      </div>
    </div>
  </div>
  <div className="book-slide">
    <div
      className="book js-flickity"
      data-flickity-options='{ "wrapAround": true }'
    >
      <div className="book-cell">
        <div className="book-img">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"
            alt=""
            className="book-photo"
          />
        </div>
        <div className="book-content">
          <div className="book-title">BIG MAGIC</div>
          <div className="book-author">by Elizabeth Gilbert</div>
          <div className="rate">
            <fieldset className="rating">
              <input
                type="checkbox"
                id="star5"
                name="rating"
                defaultValue={5}
              />
              <label className="full" htmlFor="star5" />
              <input
                type="checkbox"
                id="star4"
                name="rating"
                defaultValue={4}
              />
              <label className="full" htmlFor="star4" />
              <input
                type="checkbox"
                id="star3"
                name="rating"
                defaultValue={3}
              />
              <label className="full" htmlFor="star3" />
              <input
                type="checkbox"
                id="star2"
                name="rating"
                defaultValue={2}
              />
              <label className="full" htmlFor="star2" />
              <input
                type="checkbox"
                id="star1"
                name="rating"
                defaultValue={1}
              />
              <label className="full" htmlFor="star1" />
            </fieldset>
            <span className="book-voters">1.987 voters</span>
          </div>
          <div className="book-sum">
            Readers of all ages and walks of life have drawn inspiration and
            empowerment from Elizabeth Gilber books for years.{" "}
          </div>
          <div className="book-see">See The Book</div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ListingMusic