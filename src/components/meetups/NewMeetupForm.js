import { useRef } from "react";

import style from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = (props) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;

    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    props.onAddMeetup(newMeetup);
  }

  return (
    <Card>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="url"
            required
            id="description"
            row="5"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={style.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
