import './header.scss';
// images
import callIcon from '../../assets/img/call-icon.png';
import profileIcon from '../../assets/img/profile-icon.png';
import searchIcon from '../../assets/img/search-icon.png';
import logo from '../../assets/img/logo.png';
// 

const Header = () => {
    return (
        <header className="">
            <section className="sec-one container">
                <div className="col-6">
                    <img className="logo" src={logo} alt="logo" />
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="search" placeholder="جستجوی محصولات..." />
                            <img src={searchIcon} alt="" />
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <div>
                        <a href="tel:+07132222222" className="call-section me-4">
                            <div className="first">
                                <small>
                                    تماس با کارشناس
                                </small>
                                <br />
                                <span>
                                    071-32222222
                                </span>
                            </div>
                            <div className="header-fab-btn shadow">
                                <img src={callIcon} alt="call" />
                            </div>
                        </a>
                        <div className="header-fab-btn shadow me-3">
                            <img src={profileIcon} alt="profile" />
                        </div>
                        <div className="dropdown show">
                            <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                حساب کاربری
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-two">
                <nav>
                    <ul>
                        <li>
                            خانه
                        </li>
                        <li>
                            دسته بندی محصولات
                        </li>
                        <li>
                            فرش و گلیم
                        </li>
                        <li>
                            هدایای ویژه
                        </li>
                        <li>
                            سوالات شما
                        </li>
                        <li>
                            تماس با ما
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;