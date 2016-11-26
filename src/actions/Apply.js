export const ACTION_SUBMIT = 'SUBMIT';

export const submit = () => {
  return (
    type: ACTION_SUBMIT,
    date: PropTypes.object.isRequired,
  kokyakuCd: PropTypes.string.isRequired,
  projectCd: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  )
};