export const BASE_URL = 'https://auth.nomoreparties.co';

const prepareData = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject({
        name: `Произошла ошибка на стороне сервера: ${res.status}, попробуйте снова.`,
        isServerError: true,
      });
};

const request = ({ url, method = 'POST', token, body }) => {
  const config = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(!!token && { Authorization: `Bearer ${token}` }),
    },
    ...(!!body && { body: JSON.stringify(body) }),
  };
  return fetch(`${BASE_URL}${url}`, config).then(prepareData);
};

export const register = (password, email) => request({ url: '/signup', body: { password, email } });

export const authorize = (password, email) => request({ url: '/signin', body: { password, email } });

export const getContent = (token) => request({ url: '/users/me', method: 'GET', token });
