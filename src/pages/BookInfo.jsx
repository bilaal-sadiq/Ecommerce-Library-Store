import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../components/UI/Rating";
import Price from "../components/UI/Price";

const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                            <h2 className="book__selected--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--ig" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">Crack the coding interview</h2>
                                <Rating rating="4.5"/>
                                <div className="book__selected--price">
                                    <Price originalPrice={50} salePrice={20}/>
                                </div>
                                <div className="book__summary">
                                <div className="book__summary--title">
                                    Summary
                                </div>
                                <p className="book__summary__para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga voluptate, facere vitae in veniam dignissimos. Maiores rerum vel voluptate nulla. Iste consectetur dicta placeat eveniet maiores in, amet sapiente.
                                </p>
                                <p className="book__summary__para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga voluptate, facere vitae in veniam dignissimos. Maiores rerum vel voluptate nulla. Iste consectetur dicta placeat eveniet maiores in, amet sapiente.
                                </p>
                                </div>
                                <button className="btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
}

export default BookInfo;