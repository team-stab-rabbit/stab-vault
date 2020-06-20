import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../Register.css';
import { addListener } from '../../../../server/models/user';

const AddCollection = () => {
  const [linkList, setLinkList] = useState([]);
  const addLinkRef = useRef();

  console.log('addLinkRef', addLinkRef);
  console.log('linkList', linkList);

  const addLinkToLinkList = (e) => {
    e.preventDefault();
    const getValue = addLinkRef.current.value;
    // console.log('event ->', addLinkRef.current.value);
    setLinkList(linkList.push(getValue));
  };

  function TextInput({ id, label, type = 'text', className = null }) {
    return (
      <>
        <label htmlFor={id} className={className}>
          {label}
        </label>
        <input
          id={id}
          //   placeholder={null || label}
          type={type}
          className={className || null}
          required
        />
      </>
    );
  }
  function FormButton({ children }) {
    return (
      <button className="someClass" type="submit">
        {children}
      </button>
    );
  }

  return (
    <div>
      <form className="register-form">
        <p>`Hey User`</p>
        <p>
          It &apos; s so great to share your carefully picked set of resources
          for successful learning!
        </p>

        <TextInput
          id="title"
          label="Give a name to you collection"
          className="input-label__text"
        />
        <TextInput
          id="description"
          label="Describe it shortly"
          className="input-label__text"
        />

        <fieldset>
          <legend> Links</legend>
          <ul>
            {linkList.map((el) => (
              <li>el</li>
            ))}
          </ul>
          <input
            id="addALink"
            label="Add a link"
            className="input-label__text"
            ref={addLinkRef}
          />
          <button type="submit" onClick={addLinkToLinkList}>
            <span>Add more links</span>
          </button>
        </fieldset>
        {/* hidden,
        contributors,
        text,
        category,
        tags,
        links, */}
        <FormButton>
          <span>Save collection</span>
        </FormButton>
      </form>
    </div>
  );
};
export default AddCollection;
