export default function listreducer(state, action) {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "POST":
      return { ...state, data: action.payload };
  }
}
