import records from '@/data/businesses.json';
export type Business = (typeof records)[number];
export const businesses = records as Business[];
export const countries = [...new Set(businesses.map(b=>b.country).filter(Boolean))].sort();
export const cities = [...new Set(businesses.map(b=>b.city).filter(Boolean))].sort();
export const getBusiness = (slug:string) => businesses.find(b=>b.slug===slug);
export function matches(b:Business, query:string, country:string, category:string){
 const q=query.toLowerCase().trim();
 const hay=[b.name,b.city,b.country,b.district,b.specialty,b.businessType,b.address].join(' ').toLowerCase();
 return (!q||q.split(/\s+/).every(part=>hay.includes(part)))&&(!country||b.country===country)&&(!category||[b.specialty,b.businessType].join(' ').toLowerCase().includes(category.toLowerCase()));
}
export const categories=['Diamond','Gold','Silver','Gemstone','Manufacturing','Wholesale','Custom','Repair','Bridal','Pearl'];
