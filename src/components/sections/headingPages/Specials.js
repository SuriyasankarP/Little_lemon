import Carousel from './SpecialsCarousel';
import biryani from '../../../assets/food/Biryani.png';
import paratta from '../../../assets/food/Paratta.png';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={biryani} name="Biryani" price="INR 150" description="Biryani (Chicken) with extra spice"/>
                <SpecialCard image={paratta}name="Paratta" price="INR 120" description="Paratta with various side dish"/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="INR 40" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}