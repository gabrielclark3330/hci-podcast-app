import React, {useState} from "react";

export function GenreInputField(props) {
  let enteredString = " ";
  const [state, setState]= useState({
    enteredGenre: enteredString,
    podcastsArr: ['Alternative Health', 'Amateur', 'Arts', 'Automotive', 'Aviation', 'Buddhism', 'Business', 'Business News', 'Careers', 'Christianity', 'College & High School', 'Comedy', 'Design', 'Education', 'Educational Technology', 'Fashion & Beauty', 'Fitness & Nutrition', 'Food', 'Gadgets', 'Games & Hobbies', 'Government & Organizations', 'Health', 'Higher Education', 'Hinduism', 'History', 'Hobbies', 'Investing', 'Islam', 'Judaism', 'K-12', 'Kids & Family', 'Language Courses', 'Literature', 'Local', 'Management & Marketing', 'Medicine', 'Music', 'National', 'Natural Sciences', 'News & Politics', 'Non-Profit', 'Other', 'Other Games', 'Outdoor', 'Performing Arts', 'Personal Journals', 'Philosophy', 'Places & Travel', 'Podcasting', 'Podcasts', 'Professional', 'Regional', 'Religion & Spirituality', 'Science & Medicine', 'Self-Help', 'Sexuality', 'Shopping', 'Social Sciences', 'Society & Culture', 'Software How-To', 'Spirituality', 'Sports & Recreation', 'TV & Film', 'Tech News', 'Technology', 'Training', 'Video Games', 'Visual Arts'],
    selectedGenre: [],
  });

  function handleChange(e) {
    enteredString = e.target.value;
    setState({
      ...state,
      enteredGenre: enteredString,
    });
  }
  function numberOfMatchedChar(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let numMatched = 0;
    while (numMatched<s1.length && numMatched<s2.length && s1.charAt(numMatched)===s2.charAt(numMatched)) {
      numMatched+=1;
    }
    return numMatched;
  }
  function getXClosestPodcastGenres(targetStr, x) {
    let keyArr = [];
    for (const element of state.podcastsArr) {
      keyArr.push(numberOfMatchedChar(targetStr, element));
    }

    state.podcastsArr.sort(function(a, b){  
      return keyArr[state.podcastsArr.indexOf(a)]<keyArr[state.podcastsArr.indexOf(b)]?1:-1;
    });

    console.log(state.podcastsArr);
    return state.podcastsArr.slice(0,x+1);
  }

  return (
    <div className="inputFieldContainer">
      <label for="inputField">inputField</label>
      <input id="inputField" className="inputField" type="text"
        placeholder={ "Genres and Subgenres" } onChange={handleChange}/>
      {getXClosestPodcastGenres(state.enteredGenre, 5)}
    </div>
  );
}
