// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";
// import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((events) => {
        return id !== events.id;
      });
    });
    console.log(id);
  };

  const subtitle = "All the latest events in my neighbourhood";
  return (
    <div className="App">
      <Title title="Korkor's Birthday Party" subtitle={subtitle} />
      {/* <Title title="Dress code" subtitle="Monkey suit costumes" /> */}

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>

      {/* <Modal>
        <h3>Terms and Conditions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Modal> */}
    </div>
  );
}

export default App;
