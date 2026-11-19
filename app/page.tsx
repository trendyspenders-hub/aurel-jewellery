import Link from 'next/link';
import { ArrowUpRight, ArrowRight, MoveDown } from 'lucide-react';
import { businesses } from '@/lib/data';

const cities = [
  { name: 'Paris', region: 'FRANCE / THE MAISON', className: 'aurel-city-paris' },
  { name: 'Jaipur', region: 'INDIA / THE GEMSTONE', className: 'aurel-city-jaipur' },
  { name: 'Tokyo', region: 'JAPAN / THE DETAIL', className: 'aurel-city-tokyo' },
];

export default function Home() {
  return <div className="aurel-home">
    <section className="aurel-cinema" aria-labelledby="aurel-title">
      <div className="aurel-cinema-image" role="img" aria-label="Editorial still life of sculptural gold jewellery" />
      <div className="aurel-cinema-overlay" />
      <div className="aurel-cinema-top"><span>AN ATLAS OF EXTRAORDINARY THINGS</span><span>EST. MMXXVI</span></div>
      <div className="aurel-cinema-content">
        <span className="aurel-kicker aurel-light">AUREL / THE WORLD OF ADORNMENT</span>
        <h1 id="aurel-title">The art of<br/><i>being rare.</i></h1>
        <p>Beyond ornament. Beyond the ordinary.<br/>A world of makers, maisons and meaningful objects.</p>
        <Link href="/directory" className="aurel-pill aurel-pill-light">DISCOVER THE ATLAS <ArrowUpRight size={18}/></Link>
      </div>
      <div className="aurel-cinema-bottom"><span>01 — THE BEGINNING</span><a href="#aurel-introduction" aria-label="Scroll to introduction"><MoveDown size={19}/></a><span>SCROLL TO EXPLORE</span></div>
    </section>

    <section id="aurel-introduction" className="aurel-intro aurel-container">
      <div className="aurel-section-id"><span>01 / THE PHILOSOPHY</span><span>THE WORLD OF AUREL</span></div>
      <div className="aurel-intro-grid"><span className="aurel-star">✳</span><div><h2>Jewellery is<br/>never <i>just jewellery.</i></h2><div className="aurel-intro-foot"><p>It is memory. Identity. Obsession. A language of its own. We trace the people, places and artistry behind the world's most extraordinary adornment.</p><Link href="/directory" className="aurel-underlink">ENTER THE DIRECTORY <ArrowUpRight size={18}/></Link></div></div></div>
    </section>

    <section className="aurel-feature">
      <div className="aurel-feature-photo" role="img" aria-label="Fine jewellery in warm editorial light"/>
      <div className="aurel-feature-copy"><span className="aurel-kicker">02 / THE MATERIAL EDIT</span><span className="aurel-feature-ordinal">A STUDY IN LIGHT</span><h2>Precious<br/>by <i>nature.</i></h2><p>Some materials have held our fascination for centuries. Discover the craft, character and beauty behind every detail.</p><Link href="/directory?category=Gold" className="aurel-underlink">EXPLORE GOLD & CRAFT <ArrowUpRight size={18}/></Link><span className="aurel-feature-bottom">FORM / FEELING / FOREVER</span></div>
    </section>

    <section className="aurel-destinations aurel-container">
      <div className="aurel-section-id"><span>03 / THE DESTINATIONS</span><span>AN INTERNATIONAL PERSPECTIVE</span></div>
      <div className="aurel-dest-heading"><h2>Every place<br/>has <i>a story.</i></h2><p>From centuries-old ateliers to the world's most vibrant jewellery districts, follow the art of adornment around the globe.</p></div>
      <div className="aurel-city-grid">{cities.map((city, index) => <Link className={'aurel-city '+city.className} href={'/directory?q='+encodeURIComponent(city.name)} key={city.name}><div className="aurel-city-top"><span>0{index+1} / 03</span><ArrowUpRight size={22}/></div><div className="aurel-city-bottom"><span>{city.region}</span><h3>{city.name}</h3></div></Link>)}</div>
      <Link href="/destinations" className="aurel-underlink aurel-all-dest">ALL DESTINATIONS <ArrowRight size={18}/></Link>
    </section>

    <section className="aurel-statement"><span className="aurel-kicker aurel-light">A DIFFERENT KIND OF DISCOVERY</span><h2>For those who<br/>see <i>beyond</i><br/>the surface.</h2><div className="aurel-statement-foot"><p>Not a marketplace. A perspective.<br/>An invitation to look closer.</p><Link href="/directory" className="aurel-pill aurel-pill-light">EXPLORE AUREL <ArrowUpRight size={18}/></Link></div></section>

    <section className="aurel-finale aurel-container"><span className="aurel-kicker">THE WORLD IS WAITING</span><h2>Find something<br/><i>extraordinary.</i></h2><Link href="/directory" className="aurel-pill aurel-pill-dark">BEGIN EXPLORING <ArrowUpRight size={18}/></Link><p>{businesses.length.toLocaleString()} research records · Listings are unverified and do not imply endorsement.</p></section>
  </div>;
}