import Link from 'next/link';
import {businesses} from '@/lib/data';
import {ArrowUpRight} from 'lucide-react';
export const metadata={title:'Destinations'};
const priorityMarkets=[
 {city:'London',country:'United Kingdom',district:'Hatton Garden',focus:'Bespoke jewellery, diamonds and traditional craftsmanship',source:'https://www.hatton-garden.london/directory'},
 {city:'Antwerp',country:'Belgium',district:'Diamond District',focus:'Diamond cutting, trading and specialist manufacturers',source:'https://www.awdc.be/antwerp-diamond-directory'},
 {city:'Dubai',country:'United Arab Emirates',district:'Gold Souk and jewellery trade',focus:'Gold, gemstones, wholesale and fine jewellery',source:'https://dubaicityofgold.com/djg-members-directory/'},
 {city:'Valenza',country:'Italy',district:'Piedmont goldsmithing district',focus:'High jewellery manufacturing and atelier craftsmanship',source:'https://www.federorafi.it/en/federation/'},
 {city:'Vicenza',country:'Italy',district:'Veneto jewellery district',focus:'Goldsmithing, jewellery design and manufacturing',source:'https://www.federorafi.it/en/federation/'},
 {city:'Arezzo',country:'Italy',district:'Tuscan goldsmithing district',focus:'Gold jewellery and specialist production',source:'https://www.federorafi.it/en/federation/'}
];
function canonical(city:string){
 const s=city.trim();
 if(/^vancouver(?:,|$)/i.test(s))return 'Vancouver, Canada';
 if(/^toronto(?:,|$)/i.test(s))return 'Toronto, Canada';
 if(/^montreal(?:,|$)/i.test(s))return 'Montréal, Canada';
 if(/^san francisco(?:,|$)/i.test(s))return 'San Francisco, United States';
 if(/^seattle(?:\s*\/|,|$)/i.test(s))return 'Seattle / Puget Sound, United States';
 if(/^dallas(?:,|$)/i.test(s))return 'Dallas, United States';
 if(/^calgary(?:,|$)/i.test(s))return 'Calgary, Canada';
 if(/^richmond(?:,|$)/i.test(s))return 'Richmond, Canada';
 if(/^mississauga(?:,|$)/i.test(s))return 'Mississauga, Canada';
 if(/^mont-royal(?:,|$)/i.test(s))return 'Mont-Royal, Canada';
 if(/^schomberg(?:,|$)/i.test(s))return 'Schomberg, Canada';
 if(s==='Canada')return 'Location unspecified, Canada';
 return s;
}
export default function Page(){
 const groups=Object.values(businesses.reduce<Record<string,{name:string;count:number;search:string}>>((a,b)=>{
  const name=canonical(b.city);const k=name.toLowerCase();if(!a[k])a[k]={name,count:0,search:b.city};a[k].count++;return a;
 },{})).sort((a,b)=>b.count-a.count);
 return <><div className="page-hero"><span className="eyebrow">THE AUREL ATLAS / DESTINATIONS</span><h1>Places of <em>possibility.</em></h1><p>Explore jewellery districts, workshops and specialists across the cities represented in our research.</p></div>
 <section className="section-wrap destination-list"><div className="results-heading"><span>{groups.length} destinations in the research index</span><span>EXPLORE BY CITY</span></div>{groups.map(g=><Link href={'/directory?q='+encodeURIComponent(g.search)} key={g.name}><h2>{g.name}</h2><span>{g.count} {g.count===1?'record':'records'}</span><ArrowUpRight/></Link>)}</section>
 <section className="section-wrap destination-list"><div className="results-heading"><span>Important markets to research</span><span>EDITORIAL RESEARCH / NOT YET LISTED</span></div><p>These established jewellery centres are priorities for directory expansion. Research links are provided for context; no businesses are implied to be verified or listed.</p>{priorityMarkets.map(m=><a href={m.source} target="_blank" rel="noopener noreferrer" key={m.city}><div><h2>{m.city}, {m.country}</h2><p>{m.district} · {m.focus}</p></div><span>Research source</span><ArrowUpRight/></a>)}</section></>;
}
