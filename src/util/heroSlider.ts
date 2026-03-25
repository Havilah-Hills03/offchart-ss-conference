import slide1 from '../assets/heroSlide1.webp';
import slide2 from '../assets/heroSlide2.webp'; 

export interface Slide {
    img: string;
    title: string;
    description: string;
    span?: string;
}

export const slideData: Slide[] = [
    {
        img: slide1,
        span: 'Build Skills.',
        title: ' Gain the edge to thrive.',
        description: 'FutureSphere Business & Innovation Hub helps individuals, startups, and MSMEs secure the expertise necessary to lead in today’s digital economy.',
    },
    {
        img: slide2,
        span: 'Go Digital.',
        title: 'Turbocharge your business For Scale.',
        description: 'FutureSphere Business & Innovation Hub empowers individuals, startups, and MSMEs with the skills and support to adapt and compete in the modern digital marketplace.',
    }
   
    ];