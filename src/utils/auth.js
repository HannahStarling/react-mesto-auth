export const BASE_URL = 'https://api.nomoreparties.co';

function prepareData(res) {
  return res.ok
    ? res.json()
    : Promise.reject({
        name: `Произошла ошибка на стороне сервера: ${res.status}, попробуйте снова.`,
        isServerError: true,
      });
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
    .then(prepareData)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};
export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
  })
    .then(prepareData)
    .then(({ token }) => {
      if (token) {
        localStorage.setItem('jwt', token);
        return token;
      }
    })
    .catch((err) => console.log(err));
};
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(prepareData);
};
