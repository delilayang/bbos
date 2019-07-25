export default class Dater {

    static start(date = new Date()) {
        date = date || new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    }

    static end(date = new Date()) {
        date = date || new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), "23", "59", "59").getTime()
    }

}
