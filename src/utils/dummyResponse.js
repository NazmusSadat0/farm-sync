// src/utils/dummyResponse.js

import {
  problemResponses,
  newResponses,
} from "../data/dummyResponses";

export function getRandomResponse(type, previousId = null) {
  const responses =
    type === "new"
      ? newResponses
      : problemResponses;

  // Do not immediately show the response
  // that the operator just rejected.
  const availableResponses =
    previousId === null
      ? responses
      : responses.filter(
          (response) => response.id !== previousId
        );

  const randomIndex = Math.floor(
    Math.random() * availableResponses.length
  );

  return availableResponses[randomIndex];
}