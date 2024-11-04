import './footer.scss';
// images
import centerSidePattern from '../../assets/img/center-side-footer-pattern.png';
import titlePattern from '../../assets/img/title-footer-pattern.png';
import rightSidePattern from '../../assets/img/right-side-footer-pattern.png';
import carpet from '../../assets/img/footer-carpet.png';
import locationIcon from '../../assets/img/footer-icon-location.png';
import callIcon from '../../assets/img/footer-call-icon.png';

const Footer = () => {
    return (
        <footer>
            <img className="right-side-pattern" src={rightSidePattern} alt="" />
            <div className="container">
                <div className="footer-head">
                    <p>
                        برای ارتباط آسان تر و اطلاع از اخبار جدیدترین محصولات،‌ تخفیف های ویژه و جوایز ما،
                        <br />
                        فروشگاه اینترنتی پرنون را در شبکه های اجتماعی دنبال کنید.
                    </p>
                    <ul>
                        <li>
                            <a href="#">
                                <i class="bi bi-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <img className="center-pattern" src={centerSidePattern} alt="" />
                </div>
                <div className="footer-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="footer-title">
                                <img src={titlePattern} alt="" />
                                <h2>
                                    اطلاعات تماس
                                </h2>
                            </div>
                            <div className="d-flex">
                                <div className="info location">
                                    <img src={locationIcon} alt="" />
                                    <address>
                                        <p>
                                            شیراز،‌ ارگ کریم خان
                                        </p>
                                        <p>
                                            فسا،‌ خیابان پلیس میدان شهید منتظری
                                            <br />
                                            جنب بانک سپه
                                        </p>
                                    </address>
                                </div>
                                <div className="info call">
                                    <img src={callIcon} alt="" />
                                    <div>
                                        <a className="d-block" href="tel:+09173222222">09173222222</a>
                                        <a href="tel:+09172222222">09172222222</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="footer-title">
                                <img src={titlePattern} alt="" />
                                <h2>
                                    خدمات مشتریان
                                </h2>
                            </div>
                            <ul>
                                <li>
                                    سوالات متداول
                                </li>
                                <li>
                                    شکایات
                                </li>
                                <li>
                                    تماس با ما
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <div className="footer-carpet">
                                <img src={carpet} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;