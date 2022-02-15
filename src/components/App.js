import React, { useState, useEffect } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [deletedId, setDeletedId] = useState('');
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState({
    name: 'Загрузка данных...',
    about: 'Загрузка данных...',
    avatar: '',
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllInitialData()
      .then((data) => {
        const [cards, info] = data;
        setCurrentUser(info);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddCard(newCard) {
    api
      .postCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(currentUserAvatar) {
    api
      .setAvatar(currentUserAvatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(currentUserInfo) {
    api
      .setUserInfo(currentUserInfo)
      .then((info) => {
        setCurrentUser(info);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete() {
    api
      .deleteCard(deletedId)
      .then((_) => {
        setCards((cards) => cards.filter((c) => c._id !== deletedId));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike({ likes, id }) {
    const isLiked = likes.find(({ _id: UserId }) => UserId === currentUser._id);
    api
      .changeLikeCardStatus(id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === id ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    if (isEditProfilePopupOpen === true) {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    if (isEditAvatarPopupOpen === true) {
      setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    if (isAddPlacePopupOpen === true) {
      setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
    if (isConfirmPopupOpen === true) {
      setIsConfirmPopupOpen(!isConfirmPopupOpen);
    }
    if (selectedCard.name && selectedCard.link) {
      setSelectedCard({ name: '', link: '' });
    }
  }

  function handleConfirmDelete() {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page root__page'>
        <Header />
        <Main
          selectDeletedCard={setDeletedId}
          onDeleteConfirm={handleConfirmDelete}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onAddCard={handleAddCard} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ConfirmPopup
          onDeleteCard={handleCardDelete}
          onClose={closeAllPopups}
          isOpen={isConfirmPopupOpen}
          deletedId={deletedId}
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
