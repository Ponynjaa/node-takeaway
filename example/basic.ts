import {inspect} from 'util';

import {Takeaway} from '../src';

(async () => {
    try {
        const takeaway = new Takeaway();

        const postalCode = '7523';

        const country = await takeaway.getCountryById('NL');
        const restaurants = await country.getRestaurants(postalCode, '', '');

        const user = await country.login('<email>', '<password>');
        const history = await user.getHistory(1);
        await history[0].getDetails();

        console.log(inspect(history[0], false, null));
        console.log(inspect(await user.getLoyalty(), false, null));

        await restaurants[0].getMenu(postalCode);
        console.log(inspect(restaurants[0].categories[0].products, false, null));
    } catch (err) {
        console.error(err);
    }
})();
