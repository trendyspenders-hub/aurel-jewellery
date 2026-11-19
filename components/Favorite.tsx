'use client';
import {useEffect,useState} from 'react';import {Heart} from 'lucide-react';
const key='aurel-favourites';
export function saved():string[]{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return []}}
export function Favorite({slug}:{slug:string}){const [active,setActive]=useState(false);useEffect(()=>setActive(saved().includes(slug)),[slug]);return <button type="button" className={'fav '+(active?'selected':'')} aria-label={active?'Remove saved business':'Save business'} aria-pressed={active} onClick={()=>{const next=active?saved().filter(x=>x!==slug):[...new Set([...saved(),slug])];localStorage.setItem(key,JSON.stringify(next));setActive(!active);window.dispatchEvent(new Event('aurel-favourites-change'))}}><Heart size={18} fill={active?'currentColor':'none'}/></button>}
