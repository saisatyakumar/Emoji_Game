import './index.css'

const EmojiCard = porps => {
  const {emojiDetails, clickEmoji} = porps
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmojicard = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={onClickEmojicard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
