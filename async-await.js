const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 AM'
        };
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled!'));
    }
});

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);
};

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calender = await addToCalendar(meetingDetails);

        console.log(calender);
    } catch {
        console.log(`something wrong happened`);
    };
}

myMeeting();

console.log('Hello World');