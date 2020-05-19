import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const fakeData = [...Breakfast, ...Lunch, ...Dinner];


    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

shuffle(fakeData);

export default fakeData;
