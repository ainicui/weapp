class wxService {
  showToast() {
    return new Promise((resolve, reject) => {
      wx.showToast({
        title: title,
        icon: icon,
        duration: 2000,
        mask: true,
        success: () => {
          return resolve()
        }
      })
    })
  }
}

export default new wxService();