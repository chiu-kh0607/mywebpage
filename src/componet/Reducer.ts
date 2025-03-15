import i18n from "../i18n/config";

const suggested_language = ["ja", "en", "zh"];

const dispatchReducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_LAUNGAGE":
      if (state.lang == action.payload || suggested_language.indexOf(action.payload) == -1)
        return state;
      i18n.changeLanguage(action.payload);
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};

export default dispatchReducer;
