import React from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../../assets/vendor/fonts/circular-std/style.css';
import '../../../assets/libs/css/style.css';
import '../../../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';
import '../../../assets/vendor/bootstrap/js/bootstrap.bundle.js';
import '../../../assets/vendor/datatables/css/dataTables.bootstrap4.css';
import '../../../assets/vendor/datatables/css/buttons.bootstrap4.css';
import '../../../assets/vendor/datatables/css/select.bootstrap4.css';
import '../../../assets/vendor/datatables/css/fixedHeader.bootstrap4.css';
import '../../../assets/vendor/bootstrap/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';

const Valider = () => {
  // Mettez les noms de classNamees entre accolades pour JSX (className)
  return (
    <div className="dashboard-main-wrapper">
      <Navbar />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header">
              <h2 className="pageheader-title">FIARA OKAZ </h2>
                <p className="pageheader-text"></p>
                <div className="page-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link className="breadcrumb-link">Administrateur</Link></li>
                      <li className="breadcrumb-item"><Link  className="breadcrumb-link">Annonces</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Valider</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row">
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="../../../assets/images/eco-product-img-1.png" alt="" className="img-fluid"/></div>
                                            <div className="ribbons"></div>
                                            <div className="ribbons-text">New</div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <Link href="#" className="btn btn-primary">Add to Cart</Link>
                                                <Link to="/DetailValider" className="btn btn-outline-light">Details</Link>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-2.png" alt="" className="img-fluid"/></div>
                                            <div className="ribbons bg-danger"></div>
                                            <div className="ribbons-text">Sold</div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-3.png" alt="" className="img-fluid"/></div>
                                            <div className="ribbons bg-brand"></div>
                                            <div className="ribbons-text">Offer</div>
                                            <div className=""><a href="#" className="product-wishlist-btn active"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00
                                                    <del className="product-del">$69.00</del>
                                                </div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-4.png" alt="" className="img-fluid"/></div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-3.png" alt="" className="img-fluid"/></div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00
                                                    <del className="product-del">$69.00</del>
                                                </div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-2.png" alt="" className="img-fluid"/></div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-1.png" alt="" className="img-fluid"/></div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-1.png" alt="" className="img-fluid"/></div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00</div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="product-thumbnail">
                                        <div className="product-img-head">
                                            <div className="product-img">
                                                <img src="assets/images/eco-product-img-4.png" alt="" className="img-fluid"/></div>
                                            <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-head">
                                                <h3 className="product-title">T-Shirt Product Title</h3>
                                                <div className="product-rating d-inline-block">
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                    <i className="fa fa-fw fa-star"></i>
                                                </div>
                                                <div className="product-price">$49.00
                                                    <del className="product-del">$69.00</del>
                                                </div>
                                            </div>
                                            <div className="product-btn">
                                                <a href="#" className="btn btn-primary">Add to Cart</a>
                                                <a href="#" className="btn btn-outline-light">Details</a>
                                                <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  {/*  */}
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item active"><a className="page-link " href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                  {/*  */}
                  </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="product-sidebar">
                                <div className="product-sidebar-widget">
                                    <h4 className="mb-0">E-Commerce Filter</h4>
                                </div>
                                <div className="product-sidebar-widget">
                                    <h4 className="product-sidebar-widget-title">Category</h4>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-1"/>
                                        <label className="custom-control-label" for="cat-1">Categories #1</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-2"/>
                                        <label className="custom-control-label" for="cat-2">Categories #2</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-3"/>
                                        <label className="custom-control-label" for="cat-3">Categories #3</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-4"/>
                                        <label className="custom-control-label" for="cat-4">Categories #4</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-5"/>
                                        <label className="custom-control-label" for="cat-5">Categories #5</label>
                                    </div>
                                </div>
                                <div className="product-sidebar-widget">
                                    <h4 className="product-sidebar-widget-title">Size</h4>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size-1"/>
                                        <label className="custom-control-label" for="size-1">Small</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size-2"/>
                                        <label className="custom-control-label" for="size-2">Medium</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size-3"/>
                                        <label className="custom-control-label" for="size-3">Large</label>
                                    </div>
                                </div>
                                <div className="product-sidebar-widget">
                                    <h4 className="product-sidebar-widget-title">Brand</h4>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brand-1"/>
                                        <label className="custom-control-label" for="brand-1">Brand Name #1</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brand-2"/>
                                        <label className="custom-control-label" for="brand-2">Brand Name #2</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brand-3"/>
                                        <label className="custom-control-label" for="brand-3">Brand Name #3</label>
                                    </div>
                                </div>
                                <div className="product-sidebar-widget">
                                    <h4 className="product-sidebar-widget-title">Color</h4>
                                    <div className="custom-control custom-radio custom-color-blue ">
                                        <input type="radio" id="color-1" name="customRadio" className="custom-control-input"/>
                                        <label className="custom-control-label" for="color-1">Blue</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-color-red ">
                                        <input type="radio" id="color-2" name="customRadio" className="custom-control-input"/>
                                        <label className="custom-control-label" for="color-2">Red</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-color-yellow ">
                                        <input type="radio" id="color-3" name="customRadio" className="custom-control-input"/>
                                        <label className="custom-control-label" for="color-3">Yellow</label>
                                    </div>
                                </div>
                                <div className="product-sidebar-widget">
                                    <h4 className="product-sidebar-widget-title">Price</h4>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="price-1"/>
                                        <label className="custom-control-label" for="price-1">$$</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="price-2"/>
                                        <label className="custom-control-label" for="price-2">$$$</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="price-3"/>
                                        <label className="custom-control-label" for="price-3">$$$$</label>
                                    </div>
                                </div>
                                <div className="product-sidebar-widget">
                                    <a href="#" className="btn btn-outline-light">Reset Filter</a>
                                </div>
                            </div>
                  {/*  */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Valider;
