const INITIAL_STATE = {
  sections: [
    {
      title: "Punjabi",
      imageUrl: "https://cdn.cdnparenting.com/articles/2019/03/25144135/774826042-H-696x476.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "CHINESE",
      imageUrl: "https://www.dailynews.com/wp-content/uploads/2020/05/LDN-L-DINE-CHINESEFOOD-0529-1-1.jpg?w=838",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "Gujrati",
      imageUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/DP1.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "South Indian",
      imageUrl: "https://static.asianetnews.com/images/01d7v32trpgnee6wrycek5r70b/breakfast_710x400xt.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/women",
    },
    {
      title: "north indian",
      imageUrl: "https://www.livemorezone.com/wp-content/uploads/places-to-eat-in-noida-live-more-zone-dbs.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/men",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
