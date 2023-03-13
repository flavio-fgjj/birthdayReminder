import { useState, useEffect } from 'react';

import { loadBirthDays } from '@services/loadMockData';
import { BirthdayModel } from 'src/model/Birthday';

export default function useBirthdays() {
    const [list, setList] = useState<Array<BirthdayModel>>([]);

    let today = new Date();

    useEffect(() => {
			const ret = loadBirthDays();

			let past: Array<BirthdayModel> = [];
			let willBeOrToday: Array<BirthdayModel> = [];

			ret.map((x) => {				
				let dtBirthday = new Date(`${today.getFullYear()}-${x.date.getUTCMonth() + 1}-${x.date.getUTCDate()} 00:00:00`);
				
				// console.log(x.name)
				// console.log(today, today.getUTCDate(), today.getUTCMonth())
				// console.log(x.date, x.date.getUTCDate(), x.date.getUTCMonth())
				// console.log(dtBirthday)
				// console.log('---')	

				let differenceInTime = dtBirthday.getTime() - today.getTime();
			 	let differenceInDays: number = differenceInTime / (1000 * 3600 * 24);

				 x.days = dtBirthday.getUTCDate() == today.getUTCDate() && dtBirthday.getUTCMonth() == today.getUTCMonth() ? 0 : Math.round(differenceInDays);

				 if (x.days >= 0) {
					willBeOrToday.push(x);
				 } else {
					past.push(x);
				 }
			});

			willBeOrToday
				.sort((a,b) => (a.days > b.days) ? 1 : -1);

			past
				.sort((a,b) => (a.days > b.days) ? 1 : -1);

			let result: Array<BirthdayModel> = [...willBeOrToday, ...past];

			setList(result);
    }, []);

    return list;
}
