export default class VueConnectionListener {
  constructor(bus) {
    this.bus = bus;
    this.listener = () => {
      this.bus.$emit("connection", navigator.onLine || false);
    };
  }
  register() {
    const self = this;
    window.addEventListener("load", function() {
      window.addEventListener("online", self.listener);
      window.addEventListener("offline", self.listener);
    });
  }
  unregister() {
    const self = this;
    window.removeEventListener("online", self.listener);
    window.removeEventListener("offline", self.listener);
  }
}
