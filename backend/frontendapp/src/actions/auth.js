import jQuery from 'jquery';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      const cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export function login(username, password) {
  return (dispatch, getState) => {
    const csrftoken = getCookie('csrftoken');
    const authParams = JSON.stringify({ username, password });
    return fetch('/api/login/', {
      method: 'POST',
      body: authParams,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
    })
      .then((response) => {
        return response.json().then((data) => {
          return {
            status: response.status,
            data,
          };
        },
        );
      })
      .then((response) => {
        if (response.status !== 200) {
          dispatch({ type: 'LOGIN_ERROR', data: response.status });
        }
        if (response.status === 200) {
          dispatch({ type: 'LOGIN_SUCCESSFUL', data: response.data });
        }
      });
  };
}
