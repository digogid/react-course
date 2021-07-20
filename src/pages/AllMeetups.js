import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-course-meetups-c9f4c-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];

      for (const key in data) {
        meetups.push({
          id: key,
          ...data[key]
        });
      }

      setIsLoading(false);
      setMeetups(meetups);
    });
  }, []);

  

  if (isLoading) {
    return <section><p>Loading...</p></section>
  }
  
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetupsPage;
