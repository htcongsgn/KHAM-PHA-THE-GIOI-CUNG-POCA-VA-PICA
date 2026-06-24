const PLAYERS = {
  POCA: {
    id: "POCA",
    name: "POCA",
    born: 2018,
    nationality: "Việt Nam",
    avatar: "👦",
    avatarImage: "assets/avatars/poca.png",
    intro: "Đẹp trai, thông minh, tinh nghịch, yêu Toán và khoa học."
  },
  PICA: {
    id: "PICA",
    name: "PICA",
    born: 2020,
    nationality: "Việt Nam",
    avatar: "👧",
    avatarImage: "assets/avatars/pica.png",
    intro: "Xinh gái, dễ thương, thông minh, giỏi tiếng Anh và đang tập đọc tiếng Việt."
  }
};

const GATES = [
  { id: 1, title: "KHÁM PHÁ", game: "Mystery Box", icon: "🎁" },
  { id: 2, title: "GHÉP CẶP", game: "Match & Discover", icon: "🧩" },
  { id: 3, title: "THÁM TỬ NHÍ", game: "Hidden Explorer", icon: "🔎" },
  { id: 4, title: "GIẢI MẬT MÃ", game: "Code Breaker", icon: "🔐" },
  { id: 5, title: "SIÊU THỬ THÁCH", game: "Country Final Quest", icon: "🏁" }
];

const COUNTRY_BASICS = [
  {
    id: "vietnam",
    name: "Việt Nam",
    viName: "Việt Nam",
    flag: "🇻🇳",
    icon: "🐉",
    position: [72, 48],
    badge: "Nhà thám hiểm sông Việt Nam",
    finalQuest: "Mekong River Adventure",
    symbols: [["🍜", "Phở"], ["🛶", "Sông Mekong"], ["🌾", "Cánh đồng lúa"], ["⭐", "Ngôi sao vàng"]],
    intro: "Việt Nam có cánh đồng lúa xanh, những dòng sông nhộn nhịp, con người thân thiện và món phở thơm ngon."
  },
  {
    id: "china",
    name: "Trung Quốc",
    viName: "Trung Quốc",
    flag: "🇨🇳",
    icon: "🐼",
    position: [70, 34],
    badge: "Nhà thám hiểm Vạn Lý Trường Thành",
    finalQuest: "Great Wall Challenge",
    symbols: [["🐼", "Gấu trúc"], ["🧱", "Vạn Lý Trường Thành"], ["🥟", "Sủi cảo"], ["🏮", "Đèn lồng"]],
    intro: "Trung Quốc nổi tiếng với gấu trúc, đèn lồng, sủi cảo và Vạn Lý Trường Thành rất dài."
  },
  {
    id: "japan",
    name: "Nhật Bản",
    viName: "Nhật Bản",
    flag: "🇯🇵",
    icon: "🗻",
    position: [82, 38],
    badge: "Nhà thám hiểm Nhật Bản",
    finalQuest: "Bullet Train Mission",
    symbols: [["🗻", "Núi Phú Sĩ"], ["🍣", "Sushi"], ["🚅", "Shinkansen"], ["🌸", "Hoa anh đào"]],
    intro: "Nhật Bản nổi tiếng với tàu cao tốc, núi Phú Sĩ, sushi và hoa anh đào."
  },
  {
    id: "korea",
    name: "Hàn Quốc",
    viName: "Hàn Quốc",
    flag: "🇰🇷",
    icon: "🎤",
    position: [77, 37],
    badge: "Nhà thám hiểm ngôi sao Hàn Quốc",
    finalQuest: "K-Pop Star Quest",
    symbols: [["🎤", "K-Pop"], ["🥁", "Trống"], ["🥢", "Đũa"], ["🏙️", "Seoul"]],
    intro: "Hàn Quốc có thành phố rực rỡ, âm nhạc, món ăn ngon và những màn biểu diễn sôi động."
  },
  {
    id: "usa",
    name: "Mỹ",
    viName: "Mỹ",
    flag: "🇺🇸",
    icon: "🚀",
    position: [20, 38],
    badge: "Nhà thám hiểm NASA",
    finalQuest: "NASA Space Mission",
    symbols: [["🚀", "Tên lửa"], ["🗽", "Tượng Nữ thần Tự do"], ["🦬", "Bò rừng"], ["🏀", "Bóng rổ"]],
    intro: "Mỹ có những thành phố lớn, công viên quốc gia, tên lửa và Tượng Nữ thần Tự do."
  },
  {
    id: "australia",
    name: "Úc",
    viName: "Úc",
    flag: "🇦🇺",
    icon: "🦘",
    position: [80, 75],
    badge: "Nhà thám hiểm đồng hoang Úc",
    finalQuest: "Kangaroo Outback Quest",
    symbols: [["🦘", "Kangaroo"], ["🐨", "Koala"], ["🏖️", "Bãi biển"], ["🎵", "Nhà hát Opera"]],
    intro: "Úc có bãi biển, koala, kangaroo và vùng đồng hoang rộng lớn."
  },
  {
    id: "uk",
    name: "Anh",
    viName: "Anh",
    flag: "🇬🇧",
    icon: "👑",
    position: [45, 31],
    badge: "Nhà thám hiểm hoàng gia",
    finalQuest: "Royal Treasure Hunt",
    symbols: [["👑", "Vương miện"], ["🚌", "Xe buýt đỏ"], ["🏰", "Lâu đài"], ["☔", "Ô che mưa"]],
    intro: "Nước Anh có lâu đài, xe buýt đỏ, những ngày mưa và các câu chuyện hoàng gia."
  },
  {
    id: "france",
    name: "Pháp",
    viName: "Pháp",
    flag: "🇫🇷",
    icon: "🗼",
    position: [48, 38],
    badge: "Nhà thám hiểm tháp Eiffel",
    finalQuest: "Eiffel Tower Mystery",
    symbols: [["🗼", "Tháp Eiffel"], ["🥐", "Bánh sừng bò"], ["🎨", "Nghệ thuật"], ["🚲", "Xe đạp"]],
    intro: "Pháp nổi tiếng với tháp Eiffel, nghệ thuật, tiệm bánh và những con phố đẹp."
  },
  {
    id: "netherlands",
    name: "Hà Lan",
    viName: "Hà Lan",
    flag: "🇳🇱",
    icon: "🌷",
    position: [49, 33],
    badge: "Nhà thám hiểm cối xay gió",
    finalQuest: "Windmill Puzzle",
    symbols: [["🌷", "Hoa tulip"], ["🌬️", "Cối xay gió"], ["🚲", "Xe đạp"], ["🧀", "Phô mai"]],
    intro: "Hà Lan có hoa tulip, cối xay gió, xe đạp, kênh đào và phô mai."
  },
  {
    id: "egypt",
    name: "Ai Cập",
    viName: "Ai Cập",
    flag: "🇪🇬",
    icon: "🔺",
    position: [55, 51],
    badge: "Nhà thám hiểm kim tự tháp",
    finalQuest: "Pyramid Maze",
    symbols: [["🔺", "Kim tự tháp"], ["🐫", "Lạc đà"], ["🏜️", "Sa mạc"], ["🌊", "Sông Nile"]],
    intro: "Ai Cập có kim tự tháp, sa mạc, lạc đà và sông Nile dài."
  },
  {
    id: "russia",
    name: "Nga",
    viName: "Nga",
    flag: "🇷🇺",
    icon: "❄️",
    position: [63, 22],
    badge: "Nhà thám hiểm lâu đài tuyết",
    finalQuest: "Snow Castle Mission",
    symbols: [["❄️", "Tuyết"], ["🏰", "Lâu đài"], ["🧣", "Khăn choàng"], ["🚂", "Tàu hỏa"]],
    intro: "Nga là một đất nước rất rộng, có mùa đông tuyết trắng, tàu hỏa dài và các tòa nhà nhiều màu."
  },
  {
    id: "mexico",
    name: "Mexico",
    viName: "Mexico",
    flag: "🇲🇽",
    icon: "🛕",
    position: [17, 53],
    badge: "Nhà thám hiểm đền Maya",
    finalQuest: "Maya Temple Quest",
    symbols: [["🛕", "Đền cổ"], ["🌮", "Bánh taco"], ["🎸", "Âm nhạc"], ["🌵", "Cây xương rồng"]],
    intro: "Mexico có âm nhạc rộn ràng, bánh taco, cây xương rồng và những ngôi đền cổ."
  }
];

const PACKS = {
  vietnam: {
    POCA: {
      1: mcq([
        ["Captain POCA, món súp mì nổi tiếng của Việt Nam có bánh phở và nước dùng thơm là gì?", "🍜", ["Phở", "Ramen", "Sushi", "Kimchi"], 0, "Phở là món ăn Việt Nam rất nổi tiếng.", "country"],
        ["Captain POCA, trang phục truyền thống mềm mại của Việt Nam tên là gì?", "👗", ["Kimono", "Hanbok", "Áo dài", "Sombrero"], 2, "Áo dài là trang phục truyền thống của Việt Nam.", "country"],
        ["Captain POCA, dòng sông lớn gắn với miền Tây Việt Nam là dòng sông nào?", "🌊", ["Sông Nile", "Sông Mekong", "Sông Seine", "Sông Thames"], 1, "Sông Mekong gắn với miền Tây Nam Bộ Việt Nam.", "country"],
        ["Captain POCA, cây nào tạo nên nhiều cánh đồng xanh ở Việt Nam?", "🌾", ["Xương rồng", "Ô liu", "Thông", "Cây lúa"], 3, "Cây lúa mọc trên nhiều cánh đồng Việt Nam.", "science"],
        ["Captain POCA, lá cờ đỏ của Việt Nam có hình gì màu vàng ở giữa?", "🇻🇳", ["Ngôi sao vàng", "Mặt trăng bạc", "Bông hoa xanh", "Vòng tròn đen"], 0, "Cờ Việt Nam có ngôi sao vàng ở giữa.", "country"]
      ]),
      2: match([["🪷", "Hoa sen bí mật"], ["🐲", "Thuyền rồng"], ["🎭", "Múa rối nước"], ["🎋", "Rừng tre"], ["☕", "Cà phê Việt"]]),
      3: hidden([["👒", "Nón lá"], ["🏮", "Đèn lồng"], ["🥥", "Trái dừa"], ["🐃", "Trâu nước"], ["🧂", "Nước mắm"]], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 vật phẩm Việt Nam: nón lá, đèn lồng, trái dừa, trâu nước và nước mắm."),
      4: mcq([
        ["Captain POCA, rương khóa cần 3 chìa bạc và 2 chìa vàng. Tổng cộng có mấy chìa khóa?", "🗝️", ["4", "6", "5", "7"], 2, "3 + 2 = 5 chìa khóa.", "math"],
        ["Captain POCA, la bàn chỉ hướng nào để giúp tàu không đi lạc?", "🧭", ["Màu sắc", "Hướng đi", "Mùi vị", "Âm thanh"], 1, "La bàn giúp xác định hướng đi.", "science"],
        ["Captain POCA, túi kho báu có 12 xu vàng, chia đều vào 4 túi nhỏ. Mỗi túi có mấy xu?", "🪙", ["2", "4", "5", "3"], 3, "12 chia 4 bằng 3.", "math"],
        ["Captain POCA, tuyến đi là đảo A -> đảo B -> đảo C. Sau đảo B là đảo nào?", "🛣️", ["Đảo C", "Đảo A", "Đảo D", "Bến cảng"], 0, "Thứ tự là A, B rồi C.", "logic"],
        ["Captain POCA, bản đồ đảo có ký hiệu X ở góc phải trên. POCA nên nhìn phần nào?", "🗺️", ["Góc trái dưới", "Giữa bản đồ", "Góc phải trên", "Ngoài bản đồ"], 2, "Ký hiệu X nằm ở góc phải trên.", "observation"]
      ]),
      5: mcq([
        ["Captain POCA, trong Mekong Treasure Voyage, cánh cửa cuối giấu sau nơi nào?", "🕳️", ["Hang bí mật", "Sân bóng", "Lớp học", "Tiệm bánh"], 0, "Hang bí mật là nơi cất giấu manh mối cuối.", "country"],
        ["Captain POCA, cổng nước có 4 viên ngọc, rương báu có thêm 5 viên. Tổng cộng có mấy viên?", "🚪", ["7", "8", "10", "9"], 3, "4 + 5 = 9 viên.", "math"],
        ["Captain POCA, vật nào dùng để cất phần thưởng cuối của hải tặc?", "🧰", ["La bàn", "Cờ đua", "Rương kho báu", "Bản nhạc"], 2, "Rương kho báu dùng để cất phần thưởng.", "logic"],
        ["Captain POCA, viên nào quý và thường nằm trong vỏ trai?", "🦪", ["Kim cương đỏ", "Ngọc trai", "Đá núi lửa", "Hạt cà phê"], 1, "Ngọc trai có thể hình thành trong vỏ trai.", "science"],
        ["Captain POCA, lá cờ nào báo hiệu tàu hải tặc đã tới đảo cuối?", "🏴‍☠️", ["Cờ hải tặc", "Cờ tuyết", "Cờ nhà bếp", "Cờ trường học"], 0, "Cờ hải tặc báo hiệu nhiệm vụ cuối.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, món Việt Nam trong hình là gì?", "🍜", ["Pho", "Sushi", "Ramen", "Kimchi"], 0, "Pho là món phở của Việt Nam.", "english"],
        ["Captain PICA, áo dài là...", "👗", ["Food", "Animal", "Dress", "Toy"], 2, "Dress nghĩa là trang phục.", "english"],
        ["Captain PICA, Mekong là một...", "🌊", ["Mountain", "River", "Cake", "Flag"], 1, "River nghĩa là dòng sông.", "english"],
        ["Captain PICA, cây nào ở cánh đồng Việt Nam?", "🌾", ["Cactus", "Pine", "Rose", "Rice"], 3, "Rice là cây lúa/gạo.", "english"],
        ["Captain PICA, cờ Việt Nam có star màu gì?", "🇻🇳", ["Yellow", "Blue", "Black", "Pink"], 0, "Yellow nghĩa là màu vàng.", "country"]
      ]),
      2: match([["🪷", "Lotus"], ["🐲", "Dragon boat"], ["🎭", "Water puppet"], ["🎋", "Bamboo"], ["☕", "Coffee"]]),
      3: hidden([["👒", "Conical hat"], ["🏮", "Lantern"], ["🥥", "Coconut"], ["🐃", "Buffalo"], ["🧂", "Fish sauce"]], "Captain PICA, tìm 5 vật của Việt Nam: nón lá, đèn lồng, dừa, trâu, nước mắm."),
      4: mcq([
        ["Captain PICA, key nghĩa là gì?", "🗝️", ["Cái bánh", "Con cá", "Chìa khóa", "Cái mũ"], 2, "Key nghĩa là chìa khóa.", "english"],
        ["Captain PICA, compass giúp xem...", "🧭", ["Color", "Direction", "Food", "Music"], 1, "Direction nghĩa là hướng đi.", "english"],
        ["Captain PICA, 2 gold coin và 1 gold coin là mấy?", "🪙", ["2", "4", "5", "3"], 3, "2 + 1 = 3.", "math"],
        ["Captain PICA, map nghĩa là gì?", "🗺️", ["Bản đồ", "Cái ly", "Con mèo", "Chiếc tất"], 0, "Map nghĩa là bản đồ.", "english"],
        ["Captain PICA, island là...", "🏝️", ["Train", "Moon", "Hòn đảo", "Shoe"], 2, "Island nghĩa là hòn đảo.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, final mission có nơi nào bí mật?", "🕳️", ["Secret cave", "School bag", "Milk box", "Snowman"], 0, "Secret cave nghĩa là hang bí mật.", "english"],
        ["Captain PICA, treasure chest là...", "🧰", ["Cái ghế", "Con chó", "Mặt trời", "Rương kho báu"], 3, "Treasure chest nghĩa là rương kho báu.", "english"],
        ["Captain PICA, pearl màu nào thường sáng?", "⚪", ["Black", "Green", "White", "Red"], 2, "Pearl thường có màu trắng sáng.", "english"],
        ["Captain PICA, 1 pearl và 2 pearl là mấy?", "🦪", ["2", "3", "4", "5"], 1, "1 + 2 = 3.", "math"],
        ["Captain PICA, pirate flag là cờ của ai?", "🏴‍☠️", ["Pirate", "Doctor", "Teacher", "Chef"], 0, "Pirate nghĩa là hải tặc.", "english"]
      ])
    }
  },
  china: {
    POCA: {
      1: mcq([
        ["Captain POCA, con vật đen trắng nổi tiếng của Trung Quốc là gì?", "🐼", ["Koala", "Gấu trúc", "Kangaroo", "Gấu Bắc Cực"], 1, "Gấu trúc là con vật nổi tiếng của Trung Quốc.", "country"],
        ["Captain POCA, công trình dài uốn lượn qua núi ở Trung Quốc tên là gì?", "🧱", ["Tháp Eiffel", "Kim tự tháp", "Đấu trường La Mã", "Vạn Lý Trường Thành"], 3, "Vạn Lý Trường Thành là công trình nổi tiếng ở Trung Quốc.", "country"],
        ["Captain POCA, thủ đô của Trung Quốc là thành phố nào?", "🏙️", ["Bắc Kinh", "Seoul", "Paris", "Cairo"], 0, "Bắc Kinh là thủ đô của Trung Quốc.", "country"],
        ["Captain POCA, lễ hội đầu năm của Trung Quốc thường có pháo hoa và lời chúc may mắn là gì?", "🎆", ["Lễ hội tuyết", "Ngày hải tặc", "Tết Trung Quốc", "Lễ hội kim tự tháp"], 2, "Tết Trung Quốc là dịp lễ đầu năm quan trọng.", "country"],
        ["Captain POCA, điệu múa dài nhiều người cầm trong lễ hội Trung Quốc là gì?", "🐉", ["Múa sư tử băng", "Múa rồng", "Múa thuyền", "Múa ô"], 1, "Múa rồng thường xuất hiện trong lễ hội Trung Quốc.", "country"]
      ]),
      2: match([["🏮", "Đèn lồng đỏ"], ["🥟", "Bánh dumpling"], ["🪭", "Quạt giấy"], ["🍵", "Tách trà"], ["🧧", "Bao lì xì"]]),
      3: hidden([{ icon: "🗿", label: "Tượng binh mã", x: 18, y: 22 }, { icon: "🪢", label: "Nút thắt Trung Hoa", x: 78, y: 18 }, { icon: "🎋", label: "Thẻ tre", x: 48, y: 46 }, { icon: "🥮", label: "Bánh trung thu", x: 25, y: 75 }, { icon: "🟢", label: "Ngọc bích", x: 82, y: 72 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 vật phẩm thuộc Trung Quốc: tượng binh mã, nút thắt Trung Hoa, thẻ tre, bánh trung thu và ngọc bích."),
      4: mcq([
        ["Captain POCA, mật mã đỏ ghi 4-8-12-?. Số tiếp theo là gì?", "🔐", ["14", "15", "18", "16"], 3, "Dãy số cộng thêm 4, nên số tiếp theo là 16.", "logic"],
        ["Captain POCA, cổng đỏ có 6 viên ngọc, thêm 3 viên nữa. Có tất cả mấy viên?", "🚪", ["8", "9", "10", "12"], 1, "6 + 3 = 9.", "math"],
        ["Captain POCA, la bàn chỉ Đông rồi rẽ Nam. Công cụ nào giúp POCA biết hướng?", "🧭", ["Kính lúp", "Đồng hồ cát", "La bàn", "Bản nhạc"], 2, "La bàn giúp xác định phương hướng.", "science"],
        ["Captain POCA, đường xu vàng có 5 ô, mỗi ô có 2 xu. Tổng cộng có mấy xu?", "🪙", ["10", "7", "12", "9"], 0, "5 x 2 = 10 xu.", "math"],
        ["Captain POCA, chìa khóa kho báu nằm ở ô D. POCA nên chọn ô nào?", "🗝️", ["Ô A", "Ô B", "Ô C", "Ô D"], 3, "Mật mã yêu cầu chọn ô D.", "observation"]
      ]),
      5: mcq([
        ["Captain POCA, trong Great Wall Treasure Run, manh mối cuối giấu ở đâu?", "🏯", ["Cổng sông", "Vườn tuyết", "Tháp ẩn", "Lều biển"], 2, "Tháp ẩn là nơi cất manh mối cuối.", "country"],
        ["Captain POCA, bản đồ cổ có ký hiệu X ở giữa cây cầu. POCA cần đọc gì?", "🗺️", ["Bản đồ cổ", "Thực đơn", "Vé xem phim", "Bảng màu"], 0, "Bản đồ cổ cho biết vị trí kho báu.", "logic"],
        ["Captain POCA, cầu đá có 3 nhịp, mỗi nhịp có 4 viên đá sáng. Có mấy viên đá?", "🌉", ["9", "10", "11", "12"], 3, "3 x 4 = 12.", "math"],
        ["Captain POCA, lối đi bí mật dưới lòng đất gọi là gì?", "🕳️", ["Cầu treo", "Đường hầm bí mật", "Cánh buồm", "Quạt giấy"], 1, "Đường hầm bí mật dẫn tới kho báu.", "english"],
        ["Captain POCA, vật nào POCA mở ở cuối nhiệm vụ hải tặc?", "🧰", ["Rương hải tặc", "Bình sữa", "Quyển vở", "Mũ len"], 0, "Rương hải tặc là phần thưởng cuối.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, chọn animal nổi tiếng ở China.", "🐼", ["Koala", "Panda", "Camel", "Tiger"], 1, "Panda là gấu trúc.", "english"],
        ["Captain PICA, Great Wall là...", "🧱", ["Big cake", "Small boat", "Red shoe", "Long wall"], 3, "Great Wall nghĩa là bức tường dài.", "country"],
        ["Captain PICA, Beijing là một...", "🏙️", ["City", "Food", "Animal", "Toy"], 0, "City nghĩa là thành phố.", "english"],
        ["Captain PICA, Chinese New Year là...", "🎆", ["A river", "A hat", "Lễ năm mới", "A bus"], 2, "Chinese New Year là Tết Trung Quốc.", "country"],
        ["Captain PICA, Dragon Dance có con gì?", "🐉", ["Panda", "Dragon", "Cat", "Fish"], 1, "Dragon nghĩa là rồng.", "english"]
      ]),
      2: match([["🏮", "Lantern"], ["🥟", "Dumpling"], ["🪭", "Fan"], ["🍵", "Tea cup"], ["🧧", "Red envelope"]]),
      3: hidden([{ icon: "🗿", label: "Terracotta", x: 18, y: 22 }, { icon: "🪢", label: "Red knot", x: 78, y: 18 }, { icon: "🎋", label: "Bamboo scroll", x: 48, y: 46 }, { icon: "🥮", label: "Mooncake", x: 25, y: 75 }, { icon: "🟢", label: "Jade", x: 82, y: 72 }], "Captain PICA, tìm 5 vật của Trung Quốc: binh mã, nút đỏ, thẻ tre, bánh trăng, ngọc xanh."),
      4: mcq([
        ["Captain PICA, code nghĩa là gì?", "🔐", ["Bánh", "Mã", "Mèo", "Giày"], 1, "Code nghĩa là mã.", "english"],
        ["Captain PICA, red gate có màu gì?", "🚪", ["Blue", "Green", "Yellow", "Red"], 3, "Red nghĩa là màu đỏ.", "english"],
        ["Captain PICA, compass giúp xem...", "🧭", ["Food", "Music", "Direction", "Sleep"], 2, "Direction nghĩa là hướng đi.", "english"],
        ["Captain PICA, 2 gold coin và 2 gold coin là mấy?", "🪙", ["4", "2", "3", "5"], 0, "2 + 2 = 4.", "math"],
        ["Captain PICA, key là...", "🗝️", ["Cup", "Hat", "Moon", "Chìa khóa"], 3, "Key nghĩa là chìa khóa.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, hidden tower là...", "🏯", ["Bánh ngọt", "Tháp ẩn", "Con cá", "Xe buýt"], 1, "Hidden tower nghĩa là tháp ẩn.", "english"],
        ["Captain PICA, ancient map là...", "🗺️", ["Bản đồ cổ", "Cái ly", "Con chó", "Chiếc tất"], 0, "Ancient map nghĩa là bản đồ cổ.", "english"],
        ["Captain PICA, stone bridge là...", "🌉", ["Red hat", "Blue cake", "Yellow key", "Cầu đá"], 3, "Stone bridge nghĩa là cầu đá.", "english"],
        ["Captain PICA, secret tunnel là...", "🕳️", ["Cánh cửa", "Đường hầm bí mật", "Cái ghế", "Bông hoa"], 1, "Secret tunnel nghĩa là đường hầm bí mật.", "english"],
        ["Captain PICA, pirate chest là...", "🧰", ["Rương hải tặc", "Quả táo", "Áo mưa", "Bút chì"], 0, "Pirate chest nghĩa là rương hải tặc.", "english"]
      ])
    }
  },
  japan: {
    POCA: {
      1: mcq([
        ["Captain POCA, ngọn núi nổi tiếng thường xuất hiện trong tranh Nhật Bản là gì?", "🗻", ["Núi Phú Sĩ", "Kim tự tháp", "Alps", "Núi Bà Đen"], 0, "Núi Phú Sĩ là biểu tượng nổi tiếng của Nhật Bản.", "country"],
        ["Captain POCA, món Nhật nào thường có cơm, rong biển và cá?", "🍣", ["Kimchi", "Ramen", "Sushi", "Pho"], 2, "Sushi là món ăn nổi tiếng của Nhật Bản.", "country"],
        ["Captain POCA, tàu cao tốc nổi tiếng của Nhật Bản tên là gì?", "🚅", ["Canal boat", "Shinkansen", "Camel train", "Subway only"], 1, "Shinkansen là tàu cao tốc nổi tiếng của Nhật Bản.", "country"],
        ["Captain POCA, loài hoa mùa xuân nào gắn với Nhật Bản?", "🌸", ["Tulip", "Lotus", "Rose", "Hoa anh đào"], 3, "Hoa anh đào nở đẹp vào mùa xuân ở Nhật Bản.", "country"],
        ["Captain POCA, cờ Nhật Bản có nền trắng và hình gì màu đỏ?", "🇯🇵", ["Vòng tròn đỏ", "Ngôi sao xanh", "Tam giác vàng", "Sọc đen"], 0, "Cờ Nhật Bản có vòng tròn đỏ ở giữa.", "country"]
      ]),
      2: match([["🥷", "Mũ samurai"], ["👘", "Áo kimono"], ["🦢", "Giấy origami"], ["🏮", "Đèn lồng"], ["🌿", "Vườn Nhật"]]),
      3: hidden([{ icon: "📜", label: "Cuộn giấy ninja", x: 15, y: 20 }, { icon: "🍱", label: "Hộp bento", x: 80, y: 18 }, { icon: "⛩️", label: "Cổng torii", x: 50, y: 45 }, { icon: "🐱", label: "Mèo may mắn", x: 22, y: 78 }, { icon: "🥁", label: "Trống taiko", x: 82, y: 75 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Nhật Bản: cuộn giấy ninja, hộp bento, cổng torii, mèo may mắn và trống taiko."),
      4: mcq([
        ["Captain POCA, 3 rương báu, mỗi rương có 4 chìa vàng. Có bao nhiêu chìa?", "🗝️", ["9", "10", "11", "12"], 3, "3 x 4 = 12 chìa.", "math"],
        ["Captain POCA, mã kho báu ghi 2 -> 4, 4 -> 8, 6 -> 12. Vậy 8 -> ?", "🔐", ["14", "16", "18", "20"], 1, "Quy luật là nhân đôi, nên 8 -> 16.", "logic"],
        ["Captain POCA, la bàn chỉ East. Hướng ngược lại East là gì?", "🧭", ["North", "South", "West", "East again"], 2, "West là hướng ngược với East.", "science"],
        ["Captain POCA, từ tiếng Anh nào nghĩa là kho báu?", "🧰", ["Treasure", "Pizza", "Farmer", "Driver"], 0, "Treasure nghĩa là kho báu.", "english"],
        ["Captain POCA, chuỗi ký hiệu là đỏ, trắng, trắng, đỏ, trắng, trắng, ?. Ký hiệu tiếp theo là gì?", "🔴", ["Trắng", "Xanh", "Vàng", "Đỏ"], 3, "Mẫu lặp là đỏ rồi hai trắng.", "logic"]
      ]),
      5: mcq([
        ["Captain POCA, trong Mount Fuji Secret Cave, bản đồ ghi: đi East, qua 2 cầu, rồi rẽ North. POCA sẽ tới đâu?", "🗺️", ["Cửa hang đá", "Bến thuyền cũ", "Tháp tuyết", "Vườn cam"], 0, "Đi đúng hướng sẽ tới cửa hang đá.", "logic"],
        ["Captain POCA, clue tiếng Anh nào nghĩa là hang bí mật?", "🕳️", ["Hidden garden", "Stone bridge", "Snow gate", "Secret cave"], 3, "Secret cave nghĩa là hang bí mật.", "english"],
        ["Captain POCA, cánh cửa có 5 viên ngọc xanh và 7 viên ngọc trắng. Nếu lấy 4 viên, còn mấy viên?", "💎", ["7", "6", "8", "9"], 2, "5 + 7 = 12, 12 - 4 = 8.", "math"],
        ["Captain POCA, trong câu 'The clue is under the bridge', clue nằm ở đâu?", "🌉", ["Trên đỉnh núi", "Dưới cây cầu", "Trong rương", "Sau lá cờ"], 1, "Under the bridge nghĩa là dưới cây cầu.", "english"],
        ["Captain POCA, manh mối quốc gia cuối cùng: Tokyo thuộc nước nào?", "🏙️", ["Nhật Bản", "Pháp", "Ai Cập", "Mexico"], 0, "Tokyo là thành phố của Nhật Bản.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, núi Phú Sĩ là một...", "🗻", ["Mountain", "Boat", "Shoe", "Cake"], 0, "Mountain nghĩa là núi.", "english"],
        ["Captain PICA, chọn word cho món 🍣.", "🍣", ["Kimchi", "Pho", "Sushi", "Taco"], 2, "Sushi là món ăn Nhật Bản.", "english"],
        ["Captain PICA, Shinkansen là train rất...", "🚅", ["Slow", "Fast", "Cold", "Round"], 1, "Fast nghĩa là nhanh.", "english"],
        ["Captain PICA, hoa anh đào là...", "🌸", ["Chair", "Milk", "Hat", "Flower"], 3, "Flower nghĩa là bông hoa.", "english"],
        ["Captain PICA, cờ Nhật Bản có red...", "🇯🇵", ["Circle", "Square", "Star", "Tree"], 0, "Circle nghĩa là hình tròn.", "country"]
      ]),
      2: match([["👘", "Kimono"], ["⚔️", "Samurai"], ["🦢", "Origami"], ["🏮", "Lantern"], ["🌿", "Garden"]]),
      3: hidden([{ icon: "📜", label: "Ninja scroll", x: 15, y: 20 }, { icon: "🍱", label: "Bento box", x: 80, y: 18 }, { icon: "⛩️", label: "Torii gate", x: 50, y: 45 }, { icon: "🐱", label: "Lucky cat", x: 22, y: 78 }, { icon: "🥁", label: "Taiko drum", x: 82, y: 75 }], "Captain PICA, tìm 5 vật Nhật Bản: scroll, bento, torii, lucky cat, drum."),
      4: mcq([
        ["Captain PICA, key nghĩa là gì?", "🗝️", ["Cake", "Hat", "Fish", "Chìa khóa"], 3, "Key nghĩa là chìa khóa.", "english"],
        ["Captain PICA, code nghĩa là...", "🔐", ["Cup", "Mã", "Dog", "Sun"], 1, "Code nghĩa là mã.", "english"],
        ["Captain PICA, compass chỉ...", "🧭", ["Food", "Music", "Direction", "Sleep"], 2, "Direction nghĩa là hướng.", "english"],
        ["Captain PICA, 2 key và 2 key là mấy?", "🗝️", ["4", "2", "3", "5"], 0, "2 + 2 = 4.", "math"],
        ["Captain PICA, opposite of East là...", "🧭", ["North", "South", "Up", "West"], 3, "West ngược với East.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, secret cave là...", "🕳️", ["Hang bí mật", "Con mèo", "Cái bánh", "Màu xanh"], 0, "Secret cave nghĩa là hang bí mật.", "english"],
        ["Captain PICA, bridge nghĩa là...", "🌉", ["Cái ly", "Cái mũ", "Con cá", "Cây cầu"], 3, "Bridge nghĩa là cây cầu.", "english"],
        ["Captain PICA, 1 gem và 2 gem là mấy?", "💎", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, Tokyo là city của...", "🏙️", ["France", "Japan", "Egypt", "USA"], 1, "Tokyo ở Nhật Bản.", "country"],
        ["Captain PICA, map nghĩa là gì?", "🗺️", ["Bản đồ", "Giày", "Sữa", "Ghế"], 0, "Map nghĩa là bản đồ.", "english"]
      ])
    }
  },
  usa: {
    POCA: {
      1: mcq([
        ["Captain POCA, cơ quan vũ trụ nổi tiếng của Mỹ tên là gì?", "🚀", ["NASA", "FIFA", "Louvre", "UNICEF"], 0, "NASA là cơ quan vũ trụ nổi tiếng của Mỹ.", "science"],
        ["Captain POCA, bức tượng nổi tiếng ở New York là gì?", "🗽", ["Big Ben", "Kim tự tháp", "Tượng Nữ thần Tự do", "Tháp Eiffel"], 2, "Tượng Nữ thần Tự do nằm ở New York.", "country"],
        ["Captain POCA, lá cờ Mỹ có nhiều hình gì màu trắng?", "🇺🇸", ["Trái tim", "Ngôi sao", "Bông hoa", "Vòng tròn"], 1, "Cờ Mỹ có nhiều ngôi sao.", "country"],
        ["Captain POCA, chim biểu tượng nổi tiếng của Mỹ là loài nào?", "🦅", ["Chim cánh cụt", "Cú mèo", "Hồng hạc", "Đại bàng đầu trắng"], 3, "Đại bàng đầu trắng là biểu tượng nổi tiếng của Mỹ.", "country"],
        ["Captain POCA, thành phố New York thuộc nước nào?", "🏙️", ["Mỹ", "Pháp", "Nhật Bản", "Ai Cập"], 0, "New York là thành phố của Mỹ.", "country"]
      ]),
      2: match([["🤠", "Mũ cao bồi"], ["⚾", "Bóng chày"], ["🌉", "Cầu Golden Gate"], ["🚌", "Xe buýt trường học"], ["🥧", "Bánh táo"]]),
      3: hidden([{ icon: "🛣️", label: "Biển Route 66", x: 15, y: 18 }, { icon: "🌭", label: "Xe bán hot dog", x: 82, y: 20 }, { icon: "🦬", label: "Bison Yellowstone", x: 50, y: 45 }, { icon: "🔔", label: "Chuông Liberty Bell", x: 20, y: 80 }, { icon: "🗿", label: "Cột totem bản địa", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 vật phẩm của Mỹ: biển Route 66, xe hot dog, bison Yellowstone, chuông Liberty Bell và cột totem bản địa."),
      4: mcq([
        ["Captain POCA, 5 rương báu, mỗi rương có 4 xu vàng. Có tất cả mấy xu?", "🪙", ["16", "18", "22", "20"], 3, "5 x 4 = 20 xu.", "math"],
        ["Captain POCA, mã kho báu ghi 2 -> 6, 4 -> 12, 6 -> 18. Vậy 8 -> ?", "🔐", ["20", "24", "26", "30"], 1, "Quy luật là nhân 3, nên 8 -> 24.", "logic"],
        ["Captain POCA, bản đồ chỉ West. Hướng ngược lại West là gì?", "🧭", ["North", "South", "East", "West again"], 2, "East là hướng ngược với West.", "science"],
        ["Captain POCA, từ tiếng Anh nào nghĩa là explore?", "🔎", ["Search", "Sleep", "Hide", "Forget"], 0, "Explore gần nghĩa với search: khám phá/tìm kiếm.", "english"],
        ["Captain POCA đọc: The treasure is buried under the old bridge. Buried nghĩa là gì?", "📖", ["Bay trên trời", "Bơi dưới nước", "Đang phát sáng", "Bị chôn dưới đất"], 3, "Buried nghĩa là bị chôn dưới đất.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, NASA Space Treasure Mission bắt đầu ở đâu?", "🛰️", ["Trạm phóng", "Tiệm bánh", "Sân bóng", "Vườn hoa"], 0, "Trạm phóng là nơi bắt đầu nhiệm vụ không gian.", "science"],
        ["Captain POCA đọc: The astronaut found the hidden key near the launch pad. Launch pad nghĩa là gì?", "🚀", ["Nhà hàng", "Sân chơi", "Trường học", "Khu vực phóng tên lửa"], 3, "Launch pad là nơi tên lửa bắt đầu phóng.", "english"],
        ["Captain POCA có 2 chìa bạc, 3 chìa vàng và 1 chìa kim cương. Tổng cộng có mấy chìa?", "🗝️", ["5", "7", "6", "8"], 2, "2 + 3 + 1 = 6 chìa.", "math"],
        ["Captain POCA, bản đồ ghi: đi East, qua 2 trạm, rồi rẽ North. Kho báu ở đâu?", "🗺️", ["Trong nhà ăn", "Sau cổng sao", "Dưới biển", "Trong rừng tre"], 1, "Đi đúng lộ trình sẽ tới sau cổng sao.", "logic"],
        ["Captain POCA, Mỹ nổi tiếng với chương trình khám phá lĩnh vực nào?", "🌌", ["Không gian", "Kim tự tháp", "Cối xay gió", "Đấu kiếm samurai"], 0, "Mỹ có nhiều nhiệm vụ khám phá không gian.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, Statue of Liberty là...", "🗽", ["Statue", "Cake", "Flower", "Boat"], 0, "Statue nghĩa là bức tượng.", "english"],
        ["Captain PICA, American flag có màu red, white và...", "🇺🇸", ["Pink", "Yellow", "Blue", "Black"], 2, "Blue nghĩa là màu xanh dương.", "country"],
        ["Captain PICA, eagle là con gì?", "🦅", ["Cat", "Bird", "Fish", "Dog"], 1, "Eagle là chim đại bàng.", "english"],
        ["Captain PICA, New York là một...", "🏙️", ["Food", "Animal", "Toy", "City"], 3, "City nghĩa là thành phố.", "english"],
        ["Captain PICA, NASA làm việc với...", "🚀", ["Space", "Shoes", "Milk", "Flowers"], 0, "Space nghĩa là không gian.", "english"]
      ]),
      2: match([["🤠", "Cowboy hat"], ["⚾", "Baseball"], ["🌉", "Bridge"], ["🚌", "School bus"], ["🥧", "Apple pie"]]),
      3: hidden([{ icon: "🛣️", label: "Route 66", x: 15, y: 18 }, { icon: "🌭", label: "Hot dog cart", x: 82, y: 20 }, { icon: "🦬", label: "Bison", x: 50, y: 45 }, { icon: "🔔", label: "Liberty Bell", x: 20, y: 80 }, { icon: "🗿", label: "Totem", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Mỹ: Route 66, hot dog cart, bison, bell, totem."),
      4: mcq([
        ["Captain PICA, red là màu gì?", "🔴", ["Blue", "Yellow", "Green", "Đỏ"], 3, "Red nghĩa là màu đỏ.", "english"],
        ["Captain PICA, animal nghĩa là...", "🐾", ["Cup", "Con vật", "Hat", "Book"], 1, "Animal nghĩa là con vật.", "english"],
        ["Captain PICA, circle là hình gì?", "⭕", ["Vuông", "Tam giác", "Tròn", "Ngôi sao"], 2, "Circle nghĩa là hình tròn.", "english"],
        ["Captain PICA, 2 coin và 2 coin là mấy?", "🪙", ["4", "2", "3", "5"], 0, "2 + 2 = 4.", "math"],
        ["Captain PICA, bridge nghĩa là...", "🌉", ["Cái mũ", "Sữa", "Con mèo", "Cây cầu"], 3, "Bridge nghĩa là cây cầu.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, astronaut là...", "👩‍🚀", ["Phi hành gia", "Đầu bếp", "Bác sĩ", "Ca sĩ"], 0, "Astronaut nghĩa là phi hành gia.", "english"],
        ["Captain PICA, launch pad là nơi...", "🚀", ["Ăn bánh", "Ngủ trưa", "Đọc sách", "Tên lửa bắt đầu bay"], 3, "Launch pad là nơi tên lửa bắt đầu bay.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói: go up. Up nghĩa là...", "🗺️", ["Xuống", "Lên", "Trái", "Phải"], 1, "Up nghĩa là lên.", "logic"],
        ["Captain PICA, space nghĩa là...", "🌌", ["Không gian", "Cái ghế", "Sữa", "Cá"], 0, "Space nghĩa là không gian.", "english"]
      ])
    }
  },
  australia: {
    POCA: {
      1: mcq([
        ["Captain POCA, con vật nào nhảy bằng hai chân sau rất khỏe ở Úc?", "🦘", ["Kangaroo", "Panda", "Bò rừng", "Sư tử biển"], 0, "Kangaroo là con vật nổi tiếng của Úc.", "country"],
        ["Captain POCA, công trình mái trắng nổi tiếng ở Sydney là gì?", "🎵", ["Tháp Eiffel", "Kim tự tháp", "Nhà hát Opera Sydney", "Louvre"], 2, "Nhà hát Opera Sydney là biểu tượng kiến trúc nổi tiếng của Úc.", "country"],
        ["Captain POCA, con vật Úc nào thường ôm cây bạch đàn và ngủ rất nhiều?", "🐨", ["Lạc đà", "Koala", "Gấu trúc", "Cá heo"], 1, "Koala thường sống trên cây bạch đàn.", "science"],
        ["Captain POCA, lá cờ Úc có nền màu gì?", "🇦🇺", ["Đỏ", "Vàng", "Trắng", "Xanh dương"], 3, "Cờ Úc có nền xanh dương với nhiều ngôi sao.", "country"],
        ["Captain POCA, rạn san hô lớn nổi tiếng của Úc tên là gì?", "🐠", ["Great Barrier Reef", "Sông Nile", "Vạn Lý Trường Thành", "Sông Mekong"], 0, "Great Barrier Reef là rạn san hô rất lớn ở Úc.", "science"]
      ]),
      2: match([["🪃", "Boomerang"], ["🏄", "Ván lướt sóng"], ["🎶", "Kèn didgeridoo"], ["🤠", "Mũ Outback"], ["🐟", "Cá san hô"]]),
      3: hidden([{ icon: "🦫", label: "Thú mỏ vịt", x: 15, y: 18 }, { icon: "🦡", label: "Wombat", x: 82, y: 20 }, { icon: "🪶", label: "Lông chim emu", x: 50, y: 45 }, { icon: "🎨", label: "Tranh chấm bản địa", x: 20, y: 80 }, { icon: "💧", label: "Hố nước sa mạc", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Úc: thú mỏ vịt, wombat, lông chim emu, tranh chấm bản địa và hố nước sa mạc."),
      4: mcq([
        ["Captain POCA, 6 rương kho báu trong hẻm núi, mỗi rương có 5 xu vàng. Có tất cả mấy xu?", "🪙", ["24", "28", "32", "30"], 3, "6 x 5 = 30 xu vàng.", "math"],
        ["Captain POCA, mật mã ghi 4 -> 8, 6 -> 12, 8 -> 16. Vậy 10 -> ?", "🔐", ["18", "20", "22", "24"], 1, "Quy luật là nhân đôi, nên 10 -> 20.", "logic"],
        ["Captain POCA, la bàn trong hang chỉ North. Hướng ngược lại North là gì?", "🧭", ["East", "West", "South", "North again"], 2, "South là hướng ngược với North.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa nhất với adventure?", "📚", ["Journey", "Sleep", "Hide", "Silence"], 0, "Adventure gần nghĩa với journey: một chuyến phiêu lưu.", "english"],
        ["Captain POCA đọc: The explorer crossed the desert before reaching the treasure. Crossed nghĩa là gì?", "📖", ["Đang ngủ", "Vẽ màu", "Giấu đi", "Đi băng qua"], 3, "Crossed nghĩa là đi băng qua.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, trong Outback Treasure Expedition, bản đồ ghi: đi East, qua 3 tảng đá, rồi rẽ South. Kho báu nằm ở đâu?", "🗺️", ["Sau gốc cây cổ", "Trong tiệm bánh", "Trên tàu tuyết", "Dưới tháp Eiffel"], 0, "Đi đúng lộ trình sẽ tới sau gốc cây cổ.", "logic"],
        ["Captain POCA đọc: The treasure is hidden near the oldest tree in the valley. Valley nghĩa là gì?", "🏞️", ["Thuyền trên sông", "Tòa nhà trường học", "Rương kho báu", "Vùng đất thấp giữa các đồi"], 3, "Valley là vùng đất thấp giữa các đồi.", "english"],
        ["Captain POCA có 3 chìa bạc, 4 chìa vàng và 2 chìa kim cương. Tổng cộng có mấy chìa?", "🗝️", ["7", "8", "9", "10"], 2, "3 + 4 + 2 = 9 chìa.", "math"],
        ["Captain POCA, cổng đá có chuỗi ký hiệu: mặt trời, lá, lá, mặt trời, lá, lá, ?. Ký hiệu tiếp theo là gì?", "☀️", ["Lá", "Mặt trời", "Ngôi sao", "Giọt nước"], 1, "Mẫu lặp là mặt trời rồi hai lá.", "logic"],
        ["Captain POCA, vùng Outback của Úc thường là nơi như thế nào?", "🏜️", ["Rộng, khô và xa thành phố", "Đầy băng tuyết", "Toàn kênh đào", "Nằm dưới đại dương"], 0, "Outback là vùng rộng, khô và xa nhiều thành phố lớn.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, chọn từ English cho hình 🦘.", "🦘", ["Kangaroo", "Cat", "Moon", "Fish"], 0, "Kangaroo là con vật nổi tiếng ở Úc.", "english"],
        ["Captain PICA, Sydney Opera House là một...", "🎵", ["Animal", "Food", "Building", "Flower"], 2, "Building nghĩa là tòa nhà.", "country"],
        ["Captain PICA, koala là...", "🐨", ["Cup", "Animal", "Shoe", "Book"], 1, "Koala là một con vật.", "english"],
        ["Captain PICA, Australian flag có nền màu...", "🇦🇺", ["Red", "Yellow", "Pink", "Blue"], 3, "Blue nghĩa là màu xanh dương.", "country"],
        ["Captain PICA, Great Barrier Reef có nhiều...", "🐠", ["Fish", "Trains", "Shoes", "Hats"], 0, "Fish nghĩa là cá.", "english"]
      ]),
      2: match([["🪃", "Boomerang"], ["🏄", "Surfboard"], ["🎶", "Didgeridoo"], ["🤠", "Outback hat"], ["🐟", "Coral fish"]]),
      3: hidden([{ icon: "🦫", label: "Platypus", x: 15, y: 18 }, { icon: "🦡", label: "Wombat", x: 82, y: 20 }, { icon: "🪶", label: "Emu feather", x: 50, y: 45 }, { icon: "🎨", label: "Dot painting", x: 20, y: 80 }, { icon: "💧", label: "Water hole", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Úc: platypus, wombat, feather, dot painting, water hole."),
      4: mcq([
        ["Captain PICA, red là màu gì?", "🔴", ["Blue", "Yellow", "Green", "Đỏ"], 3, "Red nghĩa là màu đỏ.", "english"],
        ["Captain PICA, animal nghĩa là...", "🐾", ["Cup", "Con vật", "Hat", "Book"], 1, "Animal nghĩa là con vật.", "english"],
        ["Captain PICA, circle là hình gì?", "⭕", ["Vuông", "Tam giác", "Tròn", "Ngôi sao"], 2, "Circle nghĩa là hình tròn.", "english"],
        ["Captain PICA, 2 coin và 2 coin là mấy?", "🪙", ["4", "2", "3", "5"], 0, "2 + 2 = 4.", "math"],
        ["Captain PICA, water là...", "💧", ["Lửa", "Cát", "Mũ", "Nước"], 3, "Water nghĩa là nước.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, explorer là...", "🧭", ["Nhà thám hiểm", "Đầu bếp", "Bác sĩ", "Ca sĩ"], 0, "Explorer nghĩa là nhà thám hiểm.", "english"],
        ["Captain PICA, treasure nằm near the tree. Near nghĩa là...", "🌳", ["Xa", "Dưới nước", "Trên mây", "Gần"], 3, "Near nghĩa là gần.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói go down. Down nghĩa là...", "🗺️", ["Lên", "Xuống", "Trái", "Phải"], 1, "Down nghĩa là xuống.", "logic"],
        ["Captain PICA, desert thường có nhiều...", "🏜️", ["Sand", "Snow", "Milk", "Books"], 0, "Sand nghĩa là cát.", "english"]
      ])
    }
  },
  uk: {
    POCA: {
      1: mcq([
        ["Captain POCA, tháp đồng hồ nổi tiếng ở London thường được gọi là gì?", "🕰️", ["Big Ben", "Tháp Eiffel", "Kim tự tháp", "Tokyo Tower"], 0, "Big Ben là biểu tượng nổi tiếng ở London.", "country"],
        ["Captain POCA, thành phố thủ đô của Vương quốc Anh là thành phố nào?", "🏙️", ["Paris", "Cairo", "London", "Seoul"], 2, "London là thủ đô của Vương quốc Anh.", "country"],
        ["Captain POCA, lá cờ của Vương quốc Anh thường được gọi là gì?", "🇬🇧", ["Maple Leaf", "Union Jack", "Stars and Stripes", "Tricolore"], 1, "Union Jack là tên quen thuộc của cờ Vương quốc Anh.", "country"],
        ["Captain POCA, chiếc hộp màu đỏ dùng để gọi điện trên phố Anh là gì?", "☎️", ["Hộp thư xanh", "Xe cứu hỏa", "Cột đèn", "Bốt điện thoại đỏ"], 3, "Bốt điện thoại đỏ là hình ảnh quen thuộc ở Anh.", "country"],
        ["Captain POCA, xe buýt hai tầng màu đỏ ở London gọi là gì?", "🚌", ["Double-decker bus", "Camel bus", "Canal boat", "Snow train"], 0, "Double-decker bus là xe buýt hai tầng.", "english"]
      ]),
      2: match([["💂", "Lính gác cung điện"], ["🍵", "Bộ trà Anh"], ["🎡", "Vòng quay London Eye"], ["🎒", "Túi hành trình hoàng gia"], ["🎶", "Kèn túi Scotland"]]),
      3: hidden([{ icon: "🛡️", label: "Khiên hiệp sĩ", x: 15, y: 18 }, { icon: "📜", label: "Cuộn giấy kho báu", x: 82, y: 20 }, { icon: "🔖", label: "Dấu niêm phong hoàng gia", x: 50, y: 45 }, { icon: "⚔️", label: "Thanh kiếm cổ", x: 20, y: 80 }, { icon: "🗝️", label: "Chìa khóa tháp đá", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Anh: khiên hiệp sĩ, cuộn giấy kho báu, dấu niêm phong hoàng gia, thanh kiếm cổ và chìa khóa tháp đá."),
      4: mcq([
        ["Captain POCA, 5 rương bạc, mỗi rương có 6 xu vàng. Có tất cả mấy xu?", "🪙", ["24", "28", "32", "30"], 3, "5 x 6 = 30 xu vàng.", "math"],
        ["Captain POCA, mật mã ghi 4 -> 8, 6 -> 12, 10 -> 20. Vậy 12 -> ?", "🔐", ["22", "24", "26", "30"], 1, "Quy luật là nhân đôi, nên 12 -> 24.", "logic"],
        ["Captain POCA, la bàn chỉ East. Hướng ngược lại East là gì?", "🧭", ["North", "South", "West", "East again"], 2, "West là hướng ngược với East.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa nhất với kingdom?", "📚", ["Nation", "Pencil", "River", "Sandwich"], 0, "Kingdom gần nghĩa với nation khi nói về một đất nước/vương quốc.", "english"],
        ["Captain POCA đọc: The royal treasure was hidden beneath the old bridge. Beneath nghĩa là gì?", "📖", ["Ở phía trên", "Bên cạnh", "Phía sau", "Ở bên dưới"], 3, "Beneath nghĩa là ở bên dưới.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, trong Royal Crown Treasure Hunt, bản đồ ghi: đi North, qua 2 cổng đá, rồi rẽ West. Manh mối ở đâu?", "🗺️", ["Sau tháp cổ", "Trong tiệm kem", "Dưới tàu biển", "Trên sân bóng"], 0, "Đi đúng lộ trình sẽ tới sau tháp cổ.", "logic"],
        ["Captain POCA đọc: The crown is hidden behind the oldest tower in the kingdom. Oldest nghĩa là gì?", "👑", ["Nhanh nhất", "Sáng nhất", "Nhỏ nhất", "Cổ nhất"], 3, "Oldest nghĩa là cổ nhất/lâu đời nhất.", "english"],
        ["Captain POCA có 2 chìa bạc, 4 chìa vàng và 3 chìa kim cương. Tổng cộng có mấy chìa?", "🗝️", ["7", "8", "9", "10"], 2, "2 + 4 + 3 = 9 chìa.", "math"],
        ["Captain POCA, chuỗi huy hiệu là sư tử, hoa hồng, hoa hồng, sư tử, hoa hồng, hoa hồng, ?. Hình tiếp theo là gì?", "🦁", ["Hoa hồng", "Sư tử", "Vương miện", "Ngôi sao"], 1, "Mẫu lặp là sư tử rồi hai hoa hồng.", "logic"],
        ["Captain POCA, Vương quốc Anh gồm England, Scotland, Wales và vùng nào nữa?", "🧭", ["Northern Ireland", "Mexico", "Egypt", "Japan"], 0, "Northern Ireland là một phần của Vương quốc Anh.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, Big Ben là một...", "🕰️", ["Clock tower", "Cake", "Fish", "Shoe"], 0, "Clock tower nghĩa là tháp đồng hồ.", "english"],
        ["Captain PICA, London là một...", "🏙️", ["Animal", "Food", "City", "Toy"], 2, "City nghĩa là thành phố.", "english"],
        ["Captain PICA, Union Jack là...", "🇬🇧", ["Hat", "Flag", "Cup", "Book"], 1, "Flag nghĩa là lá cờ.", "country"],
        ["Captain PICA, red telephone box có màu gì?", "☎️", ["Blue", "Yellow", "Green", "Red"], 3, "Red nghĩa là màu đỏ.", "english"],
        ["Captain PICA, double-decker bus là xe buýt có mấy tầng?", "🚌", ["Two", "Five", "One", "Ten"], 0, "Double-decker bus có hai tầng.", "english"]
      ]),
      2: match([["💂", "Guard"], ["🍵", "Tea set"], ["🎡", "London Eye"], ["🎒", "Royal bag"], ["🎶", "Bagpipes"]]),
      3: hidden([{ icon: "🛡️", label: "Shield", x: 15, y: 18 }, { icon: "📜", label: "Scroll", x: 82, y: 20 }, { icon: "🔖", label: "Royal seal", x: 50, y: 45 }, { icon: "⚔️", label: "Sword", x: 20, y: 80 }, { icon: "🗝️", label: "Tower key", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Anh: shield, scroll, royal seal, sword, tower key."),
      4: mcq([
        ["Captain PICA, blue là màu gì?", "🔵", ["Đỏ", "Vàng", "Xanh dương", "Trắng"], 2, "Blue nghĩa là xanh dương.", "english"],
        ["Captain PICA, animal nghĩa là...", "🐾", ["Cup", "Con vật", "Hat", "Book"], 1, "Animal nghĩa là con vật.", "english"],
        ["Captain PICA, square là hình gì?", "⬜", ["Tròn", "Tam giác", "Ngôi sao", "Vuông"], 3, "Square nghĩa là hình vuông.", "english"],
        ["Captain PICA, 2 coin và 2 coin là mấy?", "🪙", ["4", "2", "3", "5"], 0, "2 + 2 = 4.", "math"],
        ["Captain PICA, under nghĩa là...", "📖", ["Trên", "Dưới", "Nhanh", "Đỏ"], 1, "Under nghĩa là dưới.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, crown là...", "👑", ["Vương miện", "Cái ghế", "Con cá", "Sữa"], 0, "Crown nghĩa là vương miện.", "english"],
        ["Captain PICA, hidden nghĩa là...", "📖", ["To", "Nhanh", "Xanh", "Được giấu"], 3, "Hidden nghĩa là được giấu.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói go left. Left nghĩa là...", "🗺️", ["Phải", "Trái", "Lên", "Xuống"], 1, "Left nghĩa là trái.", "logic"],
        ["Captain PICA, tower là...", "🏰", ["Tòa tháp", "Cái bánh", "Con mèo", "Bút chì"], 0, "Tower nghĩa là tòa tháp.", "english"]
      ])
    }
  },
  egypt: {
    POCA: {
      1: mcq([
        ["Captain POCA, công trình cổ hình tam giác nổi tiếng ở Ai Cập là gì?", "🔺", ["Kim tự tháp", "Big Ben", "Tháp Eiffel", "Cối xay gió"], 0, "Kim tự tháp là công trình cổ nổi tiếng của Ai Cập.", "country"],
        ["Captain POCA, tượng có thân sư tử và đầu người ở Ai Cập gọi là gì?", "🦁", ["Koala", "Dragon", "Nhân sư Sphinx", "Kangaroo"], 2, "Sphinx là tượng nhân sư nổi tiếng ở Ai Cập.", "country"],
        ["Captain POCA, vua Ai Cập cổ đại thường được gọi là gì?", "👑", ["Samurai", "Pharaoh", "Astronaut", "Knight"], 1, "Pharaoh là vua của Ai Cập cổ đại.", "country"],
        ["Captain POCA, dòng sông nổi tiếng nhất ở Ai Cập là dòng sông nào?", "🌊", ["Sông Mekong", "Sông Thames", "Sông Seine", "Sông Nile"], 3, "Sông Nile rất quan trọng với Ai Cập.", "country"],
        ["Captain POCA, cờ Ai Cập có ba dải đỏ, trắng và màu gì?", "🇪🇬", ["Đen", "Xanh lá", "Tím", "Cam"], 0, "Cờ Ai Cập có các dải đỏ, trắng và đen.", "country"]
      ]),
      2: match([["🪲", "Bọ hung scarab"], ["☥", "Biểu tượng ankh"], ["📜", "Cuộn giấy papyrus"], ["🎭", "Mặt nạ vàng"], ["🐪", "Đoàn lạc đà"]]),
      3: hidden([{ icon: "🏺", label: "Bình canopic", x: 15, y: 18 }, { icon: "🗿", label: "Cột obelisk", x: 82, y: 20 }, { icon: "🔥", label: "Đuốc đền cổ", x: 50, y: 45 }, { icon: "🧭", label: "La bàn sa mạc", x: 20, y: 80 }, { icon: "🔖", label: "Ấn hoàng gia cổ", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Ai Cập: bình canopic, cột obelisk, đuốc đền cổ, la bàn sa mạc và ấn hoàng gia cổ."),
      4: mcq([
        ["Captain POCA, 9 rương kho báu, mỗi rương có 4 xu vàng. Có tất cả mấy xu?", "🪙", ["32", "34", "38", "36"], 3, "9 x 4 = 36 xu vàng.", "math"],
        ["Captain POCA, mật mã ghi 2 -> 6, 4 -> 12, 6 -> 18. Vậy 8 -> ?", "🔐", ["22", "24", "26", "28"], 1, "Quy luật là nhân 3, nên 8 -> 24.", "logic"],
        ["Captain POCA, sa mạc ban ngày thường có điều kiện nào?", "🏜️", ["Ẩm và lạnh", "Đầy tuyết", "Nóng và khô", "Mưa cả ngày"], 2, "Sa mạc thường nóng và khô vào ban ngày.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa nhất với ancient?", "📚", ["Very old", "Very fast", "Very new", "Very small"], 0, "Ancient nghĩa là rất cổ xưa.", "english"],
        ["Captain POCA đọc: The treasure was hidden inside a sand chamber. Hidden nghĩa là gì?", "📖", ["Đang bay", "Bị vỡ", "Được sơn", "Được giấu"], 3, "Hidden nghĩa là được giấu.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, trong Pyramid Escape & Lost Pharaoh Treasure, bản đồ ghi: đi East, qua 2 cửa đá, rồi rẽ South. Lối ra ở đâu?", "🗺️", ["Sau bức tường có dấu sao", "Trong tiệm bánh", "Trên tàu tuyết", "Dưới sân bóng"], 0, "Đi đúng lộ trình sẽ tới sau bức tường có dấu sao.", "logic"],
        ["Captain POCA đọc: The treasure lies beyond the final stone gate. Beyond nghĩa là gì?", "🚪", ["Ở dưới", "Bên cạnh", "Phía sau ghế", "Xa hơn/vượt qua"], 3, "Beyond nghĩa là xa hơn hoặc vượt qua.", "english"],
        ["Captain POCA có 5 chìa bạc, 3 chìa vàng và 2 chìa kim cương. Tổng cộng có mấy chìa?", "🗝️", ["8", "9", "10", "11"], 2, "5 + 3 + 2 = 10 chìa.", "math"],
        ["Captain POCA, chuỗi ký hiệu là mặt trời, đá, đá, mặt trời, đá, đá, ?. Ký hiệu tiếp theo là gì?", "☀️", ["Đá", "Mặt trời", "Ngôi sao", "Giọt nước"], 1, "Mẫu lặp là mặt trời rồi hai viên đá.", "logic"],
        ["Captain POCA, dòng sông nổi tiếng nhất ở Ai Cập là gì?", "🌊", ["Sông Nile", "Sông Mekong", "Sông Thames", "Sông Seine"], 0, "Sông Nile là dòng sông nổi tiếng nhất ở Ai Cập.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, pyramid là...", "🔺", ["Kim tự tháp", "Cái bánh", "Con cá", "Chiếc giày"], 0, "Pyramid nghĩa là kim tự tháp.", "english"],
        ["Captain PICA, Sphinx có thân giống con gì?", "🦁", ["Bird", "Fish", "Lion", "Cat"], 2, "Lion nghĩa là sư tử.", "country"],
        ["Captain PICA, Pharaoh là...", "👑", ["Doctor", "King", "Teacher", "Singer"], 1, "Pharaoh là vua Ai Cập cổ đại.", "english"],
        ["Captain PICA, Nile River là một...", "🌊", ["Mountain", "Cake", "Flag", "River"], 3, "River nghĩa là dòng sông.", "country"],
        ["Captain PICA, Egypt flag có màu red, white và...", "🇪🇬", ["Black", "Pink", "Green", "Blue"], 0, "Black nghĩa là màu đen.", "country"]
      ]),
      2: match([["🪲", "Scarab"], ["☥", "Ankh"], ["📜", "Papyrus"], ["🎭", "Golden mask"], ["🐪", "Camel caravan"]]),
      3: hidden([{ icon: "🏺", label: "Canopic jar", x: 15, y: 18 }, { icon: "🗿", label: "Obelisk", x: 82, y: 20 }, { icon: "🔥", label: "Temple torch", x: 50, y: 45 }, { icon: "🧭", label: "Desert compass", x: 20, y: 80 }, { icon: "🔖", label: "Royal seal", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Ai Cập: canopic jar, obelisk, temple torch, desert compass, royal seal."),
      4: mcq([
        ["Captain PICA sees: yellow camel, blue boat, green palm tree, red flag. Which animal is yellow?", "🟡", ["Camel", "Boat", "Palm tree", "Flag"], 0, "Yellow camel là con lạc đà màu vàng.", "english"],
        ["Captain PICA, shape nào là triangle?", "🔺", ["Circle", "Triangle", "Square", "Star"], 1, "Triangle nghĩa là hình tam giác.", "english"],
        ["Captain PICA, 2 coin và 2 coin là mấy?", "🪙", ["3", "5", "4", "6"], 2, "2 + 2 = 4.", "math"],
        ["Captain PICA, torch dùng để tạo...", "🔥", ["Nước", "Cát", "Mũ", "Ánh sáng"], 3, "Torch là đuốc, dùng để tạo ánh sáng.", "logic"],
        ["Captain PICA, desert có nhiều...", "🏜️", ["Sand", "Snow", "Milk", "Books"], 0, "Sand nghĩa là cát.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, treasure là...", "🧰", ["Kho báu", "Cái ghế", "Con mèo", "Sữa"], 0, "Treasure nghĩa là kho báu.", "english"],
        ["Captain PICA reads: The treasure is near the blue camel tent. Which tent should PICA go to?", "⛺", ["Red", "Green", "Yellow", "Blue"], 3, "Blue tent là lều màu xanh dương.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói go left. Left nghĩa là...", "🗺️", ["Phải", "Trái", "Lên", "Xuống"], 1, "Left nghĩa là trái.", "logic"],
        ["Captain PICA, mummy là...", "🧻", ["Xác ướp", "Bánh ngọt", "Xe buýt", "Cái tất"], 0, "Mummy nghĩa là xác ướp.", "english"]
      ])
    }
  },
  netherlands: {
    POCA: {
      1: mcq([
        ["Captain POCA, chiếc máy có cánh lớn quay nhờ gió ở Hà Lan gọi là gì?", "🌬️", ["Cối xay gió", "Kim tự tháp", "Tên lửa", "Lâu đài tuyết"], 0, "Cối xay gió là biểu tượng quen thuộc của Hà Lan.", "country"],
        ["Captain POCA, thủ đô nổi tiếng với nhiều kênh đào ở Hà Lan là thành phố nào?", "🏙️", ["Paris", "Cairo", "Amsterdam", "Seoul"], 2, "Amsterdam là thành phố nổi tiếng với nhiều kênh đào.", "country"],
        ["Captain POCA, cánh đồng mùa xuân ở Hà Lan thường rực rỡ bởi loài hoa nào?", "🌷", ["Hoa sen", "Hoa tulip", "Hoa anh đào", "Hoa hướng dương"], 1, "Hà Lan nổi tiếng với những cánh đồng tulip nhiều màu.", "country"],
        ["Captain POCA, cờ Hà Lan có ba sọc ngang đỏ, trắng và màu gì?", "🇳🇱", ["Xanh lá", "Vàng", "Cam", "Xanh dương"], 3, "Cờ Hà Lan có đỏ, trắng và xanh dương.", "country"],
        ["Captain POCA, phương tiện thân thiện môi trường nào xuất hiện rất nhiều ở Hà Lan?", "🚲", ["Xe đạp", "Lạc đà", "Tàu vũ trụ", "Xe trượt tuyết"], 0, "Hà Lan có rất nhiều đường dành cho xe đạp.", "country"]
      ]),
      2: match([["👞", "Guốc gỗ Hà Lan"], ["🧀", "Phô mai Dutch"], ["⛵", "Thuyền kênh đào"], ["🏺", "Gốm Delft"], ["💐", "Chợ hoa"]]),
      3: hidden([{ icon: "🚢", label: "Tàu buôn Hà Lan", x: 15, y: 18 }, { icon: "🧡", label: "Vương miện cam", x: 82, y: 20 }, { icon: "⚓", label: "Mỏ neo cảng", x: 50, y: 45 }, { icon: "🗺️", label: "Bản đồ hàng hải", x: 20, y: 80 }, { icon: "🚪", label: "Cổng đê biển", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Hà Lan: tàu buôn Hà Lan, vương miện cam, mỏ neo cảng, bản đồ hàng hải và cổng đê biển."),
      4: mcq([
        ["Captain POCA, 8 rương kho báu, mỗi rương có 3 xu vàng. Có tất cả mấy xu?", "🪙", ["21", "22", "26", "24"], 3, "8 x 3 = 24 xu vàng.", "math"],
        ["Captain POCA, mật mã ghi 5 -> 10, 7 -> 14, 9 -> 18. Vậy 11 -> ?", "🔐", ["20", "22", "24", "26"], 1, "Quy luật là nhân đôi, nên 11 -> 22.", "logic"],
        ["Captain POCA, đê biển giúp vùng đất thấp tránh điều gì?", "🌊", ["Gió lạnh", "Tuyết rơi", "Nước tràn vào", "Ánh nắng"], 2, "Đê biển giúp ngăn nước tràn vào vùng đất thấp.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa nhất với merchant?", "📚", ["Trader", "Soldier", "Painter", "Farmer"], 0, "Merchant gần nghĩa với trader: người buôn bán.", "english"],
        ["Captain POCA đọc: The Dutch ship sailed across the sea to find treasure. Sailed nghĩa là gì?", "📖", ["Chạy nhanh", "Leo đồi", "Xây nhà", "Đi bằng thuyền"], 3, "Sailed nghĩa là di chuyển bằng thuyền/tàu.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, trong Windmill Treasure Mystery, bản đồ ghi: đi East, qua 3 cây cầu, rồi rẽ North. Kho báu ở đâu?", "🗺️", ["Sau nhà kho ven nước", "Trong tiệm bánh", "Trên núi tuyết", "Dưới sân bóng"], 0, "Đi đúng lộ trình sẽ tới sau nhà kho ven nước.", "logic"],
        ["Captain POCA đọc: The treasure is hidden beyond the oldest windmill near the canal. Beyond nghĩa là gì?", "📖", ["Ở dưới", "Sau cái ghế", "Trong chiếc hộp", "Xa hơn/vượt qua"], 3, "Beyond nghĩa là xa hơn hoặc vượt qua.", "english"],
        ["Captain POCA có 4 chìa bạc, 3 chìa vàng và 2 chìa kim cương. Tổng cộng có mấy chìa?", "🗝️", ["8", "10", "9", "11"], 2, "4 + 3 + 2 = 9 chìa.", "math"],
        ["Captain POCA, chuỗi ký hiệu là sóng, cánh buồm, cánh buồm, sóng, cánh buồm, cánh buồm, ?. Ký hiệu tiếp theo là gì?", "🌊", ["Cánh buồm", "Sóng", "Vương miện", "Ngôi sao"], 1, "Mẫu lặp là sóng rồi hai cánh buồm.", "logic"],
        ["Captain POCA, Netherlands là tên tiếng Anh của quốc gia nào?", "🇳🇱", ["Hà Lan", "Hàn Quốc", "Pháp", "Ai Cập"], 0, "Netherlands nghĩa là Hà Lan.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, windmill là...", "🌬️", ["Cối xay gió", "Cái bánh", "Con cá", "Chiếc giày"], 0, "Windmill nghĩa là cối xay gió.", "english"],
        ["Captain PICA, Amsterdam là một...", "🏙️", ["Animal", "Food", "City", "Toy"], 2, "City nghĩa là thành phố.", "english"],
        ["Captain PICA, tulip là...", "🌷", ["Boat", "Flower", "Hat", "Book"], 1, "Flower nghĩa là bông hoa.", "english"],
        ["Captain PICA, Dutch flag có màu red, white và...", "🇳🇱", ["Green", "Yellow", "Pink", "Blue"], 3, "Blue nghĩa là xanh dương.", "country"],
        ["Captain PICA, bike là...", "🚲", ["Xe đạp", "Lạc đà", "Tàu lửa", "Cái ly"], 0, "Bike nghĩa là xe đạp.", "english"]
      ]),
      2: match([["👞", "Clogs"], ["🧀", "Cheese"], ["⛵", "Canal boat"], ["🏺", "Delft pottery"], ["💐", "Flower market"]]),
      3: hidden([{ icon: "🚢", label: "Merchant ship", x: 15, y: 18 }, { icon: "🧡", label: "Orange crown", x: 82, y: 20 }, { icon: "⚓", label: "Harbor anchor", x: 50, y: 45 }, { icon: "🗺️", label: "Sea map", x: 20, y: 80 }, { icon: "🚪", label: "Dike gate", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Hà Lan: merchant ship, orange crown, harbor anchor, sea map, dike gate."),
      4: mcq([
        ["Captain PICA sees: red tulip, blue boat, yellow cheese, green tree. Which object is yellow?", "🟡", ["Tulip", "Boat", "Cheese", "Tree"], 2, "Yellow cheese là phô mai màu vàng.", "english"],
        ["Captain PICA, shape nào là square?", "⬜", ["Circle", "Square", "Triangle", "Star"], 1, "Square nghĩa là hình vuông.", "english"],
        ["Captain PICA, 2 boat và 2 boat là mấy?", "⛵", ["3", "5", "6", "4"], 3, "2 + 2 = 4.", "math"],
        ["Captain PICA, anchor dùng cho...", "⚓", ["Tàu thuyền", "Bánh ngọt", "Áo mưa", "Bút chì"], 0, "Anchor là mỏ neo của tàu thuyền.", "logic"],
        ["Captain PICA, water là...", "💧", ["Lửa", "Nước", "Cát", "Mũ"], 1, "Water nghĩa là nước.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, treasure là...", "🧰", ["Kho báu", "Cái ghế", "Con mèo", "Sữa"], 0, "Treasure nghĩa là kho báu.", "english"],
        ["Captain PICA reads: The treasure is near the blue boat. Which boat should PICA follow?", "⛵", ["Red", "Yellow", "Green", "Blue"], 3, "Blue boat là chiếc thuyền màu xanh dương.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói go right. Right nghĩa là...", "🗺️", ["Trái", "Phải", "Lên", "Xuống"], 1, "Right nghĩa là phải.", "logic"],
        ["Captain PICA, canal có nhiều...", "🌊", ["Water", "Snow", "Fire", "Sand"], 0, "Canal là kênh đào có nước.", "country"]
      ])
    }
  },
  korea: {
    POCA: {
      1: mcq([
        ["Captain POCA, thủ đô của Hàn Quốc là thành phố nào?", "🏙️", ["Seoul", "Paris", "Amsterdam", "Cairo"], 0, "Seoul là thủ đô của Hàn Quốc.", "country"],
        ["Captain POCA, trang phục truyền thống của Hàn Quốc tên là gì?", "👘", ["Áo dài", "Kimono", "Hanbok", "Sombrero"], 2, "Hanbok là trang phục truyền thống Hàn Quốc.", "country"],
        ["Captain POCA, món rau lên men cay nổi tiếng của Hàn Quốc là gì?", "🥬", ["Sushi", "Kimchi", "Pho", "Dumpling"], 1, "Kimchi là món ăn nổi tiếng của Hàn Quốc.", "country"],
        ["Captain POCA, lá cờ Hàn Quốc có biểu tượng tròn đỏ xanh gọi là gì?", "🇰🇷", ["Star circle", "Sun wheel", "Moon dot", "Taegeuk"], 3, "Taegeuk là biểu tượng tròn trên cờ Hàn Quốc.", "country"],
        ["Captain POCA, tháp quan sát nổi tiếng ở Seoul là gì?", "🗼", ["N Seoul Tower", "Eiffel Tower", "Tokyo Skytree", "Big Ben"], 0, "N Seoul Tower là địa điểm nổi tiếng ở Seoul.", "country"]
      ]),
      2: match([["🎤", "Micro K-Pop"], ["🪭", "Quạt Hàn Quốc"], ["🌶️", "Tteokbokki cay"], ["🥁", "Trống janggu"], ["🏯", "Cổng cung điện"]]),
      3: hidden([{ icon: "📜", label: "Cuộn chữ Hangul", x: 15, y: 18 }, { icon: "🎭", label: "Mặt nạ Hàn Quốc", x: 82, y: 20 }, { icon: "🥋", label: "Đai Taekwondo", x: 50, y: 45 }, { icon: "🗿", label: "Tượng đá canh cổng", x: 20, y: 80 }, { icon: "🏮", label: "Đèn truyền thống", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 vật phẩm Hàn Quốc: cuộn chữ Hangul, mặt nạ Hàn Quốc, đai Taekwondo, tượng đá canh cổng và đèn truyền thống."),
      4: mcq([
        ["Captain POCA, 4 rương kho báu, mỗi rương có 3 chìa vàng. Có bao nhiêu chìa?", "🗝️", ["9", "10", "11", "12"], 3, "4 x 3 = 12 chìa.", "math"],
        ["Captain POCA, mã kho báu ghi 3 -> 6, 5 -> 10, 8 -> 16. Vậy 9 -> ?", "🔐", ["17", "18", "19", "20"], 1, "Quy luật là nhân đôi, nên 9 -> 18.", "logic"],
        ["Captain POCA, la bàn chỉ South. Hướng ngược lại South là gì?", "🧭", ["East", "West", "North", "South again"], 2, "North là hướng ngược với South.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa với traditional?", "📚", ["Ancient", "Fast", "Empty", "Loud"], 0, "Traditional gần nghĩa với ancient khi nói về điều xưa/truyền thống.", "english"],
        ["Captain POCA, chuỗi đèn là xanh, đỏ, đỏ, xanh, đỏ, đỏ, ?. Màu tiếp theo là gì?", "🔵", ["Đỏ", "Vàng", "Trắng", "Xanh"], 3, "Mẫu lặp là xanh rồi hai đỏ.", "logic"]
      ]),
      5: mcq([
        ["Captain POCA, trong Seoul Night Treasure Hunt, bản đồ ghi: đi East, qua 2 cây cầu, rồi rẽ North. Kho báu ở đâu?", "🗺️", ["Sau cổng trăng", "Dưới bến tàu", "Trong tiệm bánh", "Trên xe buýt"], 0, "Đi đúng lộ trình sẽ tới sau cổng trăng.", "logic"],
        ["Captain POCA đọc câu: The treasure is hidden behind the blue gate. Hidden nghĩa là gì?", "📖", ["Nhanh", "Rỗng", "Ồn ào", "Bí mật/được giấu"], 3, "Hidden nghĩa là được giấu hoặc bí mật.", "english"],
        ["Captain POCA, nếu có 5 đèn đêm và mỗi đèn có 2 viên pha lê, có bao nhiêu viên pha lê?", "💎", ["8", "9", "10", "12"], 2, "5 x 2 = 10.", "math"],
        ["Captain POCA, cụm từ night market nghĩa là gì?", "🌙", ["Bảo tàng", "Chợ đêm", "Cầu đá", "Cánh buồm"], 1, "Night market nghĩa là chợ đêm.", "english"],
        ["Captain POCA, Hàn Quốc nằm ở khu vực nào của châu Á?", "🧭", ["Đông Á", "Bắc Phi", "Nam Mỹ", "Tây Âu"], 0, "Hàn Quốc thuộc khu vực Đông Á.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, Seoul ở nước nào?", "🏙️", ["Korea", "France", "USA", "Japan"], 0, "Seoul ở Hàn Quốc.", "country"],
        ["Captain PICA, hanbok là...", "👘", ["Food", "Animal", "Clothes", "Toy"], 2, "Clothes nghĩa là quần áo.", "english"],
        ["Captain PICA, kimchi là...", "🥬", ["Shoes", "Food", "Moon", "Chair"], 1, "Food nghĩa là đồ ăn.", "english"],
        ["Captain PICA, Korean flag là...", "🇰🇷", ["Book", "Cup", "Cat", "Flag"], 3, "Flag nghĩa là lá cờ.", "english"],
        ["Captain PICA, N Seoul Tower là một...", "🗼", ["Tower", "Boat", "Flower", "Bike"], 0, "Tower nghĩa là tháp.", "country"]
      ]),
      2: match([["🎤", "Microphone"], ["🪭", "Fan"], ["🌶️", "Tteokbokki"], ["🥁", "Drum"], ["🏯", "Palace gate"]]),
      3: hidden([{ icon: "📜", label: "Hangul scroll", x: 15, y: 18 }, { icon: "🎭", label: "Mask", x: 82, y: 20 }, { icon: "🥋", label: "Belt", x: 50, y: 45 }, { icon: "🗿", label: "Stone statue", x: 20, y: 80 }, { icon: "🏮", label: "Lantern", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Hàn Quốc: scroll, mask, belt, stone statue, lantern."),
      4: mcq([
        ["Captain PICA, key nghĩa là gì?", "🗝️", ["Cake", "Hat", "Fish", "Chìa khóa"], 3, "Key nghĩa là chìa khóa.", "english"],
        ["Captain PICA, blue là màu gì?", "🔵", ["Đỏ", "Xanh dương", "Vàng", "Trắng"], 1, "Blue nghĩa là xanh dương.", "english"],
        ["Captain PICA, circle là hình gì?", "⭕", ["Vuông", "Tam giác", "Tròn", "Ngôi sao"], 2, "Circle nghĩa là hình tròn.", "english"],
        ["Captain PICA, 2 gem và 2 gem là mấy?", "💎", ["4", "2", "3", "5"], 0, "2 + 2 = 4.", "math"],
        ["Captain PICA, animal nghĩa là...", "🐾", ["Cái ly", "Bông hoa", "Cái mũ", "Con vật"], 3, "Animal nghĩa là con vật.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, night nghĩa là gì?", "🌙", ["Đêm", "Bánh", "Ghế", "Cá"], 0, "Night nghĩa là đêm.", "english"],
        ["Captain PICA, hidden nghĩa là...", "📖", ["Nhanh", "To", "Đỏ", "Được giấu"], 3, "Hidden nghĩa là được giấu.", "english"],
        ["Captain PICA, 1 bridge và 1 bridge là mấy?", "🌉", ["1", "3", "2", "4"], 2, "1 + 1 = 2.", "math"],
        ["Captain PICA, treasure ở sau gate. Gate là...", "🚪", ["Con chó", "Cánh cổng", "Cái bánh", "Chiếc tất"], 1, "Gate nghĩa là cánh cổng.", "english"],
        ["Captain PICA, Korea ở châu lục nào?", "🧭", ["Asia", "Africa", "Europe", "America"], 0, "Korea ở châu Á.", "country"]
      ])
    }
  },
  france: {
    POCA: {
      1: mcq([
        ["Captain POCA, công trình nổi tiếng nào nằm ở Paris và làm bằng khung sắt?", "🗼", ["Tháp Eiffel", "Big Ben", "Sydney Opera House", "Kim tự tháp"], 0, "Tháp Eiffel là biểu tượng nổi tiếng của Paris.", "country"],
        ["Captain POCA, thủ đô của Pháp là thành phố nào?", "🏙️", ["London", "Cairo", "Paris", "Seoul"], 2, "Paris là thủ đô của Pháp.", "country"],
        ["Captain POCA, cờ Pháp có ba dải dọc xanh, trắng và màu gì?", "🇫🇷", ["Vàng", "Đỏ", "Xanh lá", "Đen"], 1, "Cờ Pháp có ba màu xanh dương, trắng và đỏ.", "country"],
        ["Captain POCA, bánh sừng bò nổi tiếng của Pháp tên là gì?", "🥐", ["Baguette", "Macaron", "Crepe", "Croissant"], 3, "Croissant là bánh sừng bò nổi tiếng của Pháp.", "country"],
        ["Captain POCA, bảo tàng lớn ở Paris có bức Mona Lisa là bảo tàng nào?", "🏛️", ["Louvre Museum", "NASA Museum", "Amsterdam Museum", "Pyramid Museum"], 0, "Louvre Museum là bảo tàng nổi tiếng ở Paris.", "country"]
      ]),
      2: match([["🥖", "Bánh mì baguette"], ["🎩", "Mũ beret Pháp"], ["🧴", "Chai nước hoa"], ["🌳", "Vườn Pháp"], ["⛵", "Thuyền sông Seine"]]),
      3: hidden([{ icon: "⚜️", label: "Biểu tượng fleur-de-lis", x: 15, y: 18 }, { icon: "🗝️", label: "Chìa khóa cung điện", x: 82, y: 20 }, { icon: "🛢️", label: "Thùng rượu hoàng gia", x: 50, y: 45 }, { icon: "🛡️", label: "Khiên trung cổ", x: 20, y: 80 }, { icon: "📜", label: "Cuộn giấy hoàng gia", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Pháp: biểu tượng fleur-de-lis, chìa khóa cung điện, thùng rượu hoàng gia, khiên trung cổ và cuộn giấy hoàng gia."),
      4: mcq([
        ["Captain POCA, 7 rương kho báu, mỗi rương có 4 xu vàng. Có tất cả mấy xu?", "🪙", ["24", "26", "30", "28"], 3, "7 x 4 = 28 xu vàng.", "math"],
        ["Captain POCA, mật mã ghi 3 -> 9, 4 -> 12, 5 -> 15. Vậy 6 -> ?", "🔐", ["16", "18", "20", "24"], 1, "Quy luật là nhân 3, nên 6 -> 18.", "logic"],
        ["Captain POCA, la bàn trong hầm chỉ South. Hướng ngược lại South là gì?", "🧭", ["East", "West", "North", "South again"], 2, "North là hướng ngược với South.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa nhất với discover?", "📚", ["Find", "Sleep", "Hide", "Forget"], 0, "Discover gần nghĩa với find: khám phá/tìm ra.", "english"],
        ["Captain POCA đọc: The treasure was hidden inside the ancient palace. Ancient nghĩa là gì?", "📖", ["Rất nhanh", "Rất nhỏ", "Rất sáng", "Rất cổ xưa"], 3, "Ancient nghĩa là rất cổ xưa.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, trong Eiffel Secret Vault, bản đồ ghi: đi East, qua 2 vòm đá, rồi rẽ North. Cửa hầm ở đâu?", "🗺️", ["Sau bức tường đá", "Trong tiệm bánh", "Trên tàu tuyết", "Dưới sân bóng"], 0, "Đi đúng lộ trình sẽ tới sau bức tường đá.", "logic"],
        ["Captain POCA đọc: The treasure is hidden behind the oldest stone tower. Oldest nghĩa là gì?", "🗼", ["Nhanh nhất", "Nhỏ nhất", "Sáng nhất", "Cổ nhất"], 3, "Oldest nghĩa là cổ nhất/lâu đời nhất.", "english"],
        ["Captain POCA có 3 chìa bạc, 5 chìa vàng và 2 chìa kim cương. Tổng cộng có mấy chìa?", "🗝️", ["8", "9", "10", "11"], 2, "3 + 5 + 2 = 10 chìa.", "math"],
        ["Captain POCA, chuỗi ký hiệu là hoa huệ, vương miện, vương miện, hoa huệ, vương miện, vương miện, ?. Ký hiệu tiếp theo là gì?", "⚜️", ["Vương miện", "Hoa huệ", "Ngôi sao", "Giọt nước"], 1, "Mẫu lặp là hoa huệ rồi hai vương miện.", "logic"],
        ["Captain POCA, thành phố Paris thuộc quốc gia nào?", "🏙️", ["Pháp", "Nhật Bản", "Ai Cập", "Mexico"], 0, "Paris là thủ đô của Pháp.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, Eiffel Tower là một...", "🗼", ["Tower", "Cake", "Fish", "Shoe"], 0, "Tower nghĩa là tòa tháp.", "english"],
        ["Captain PICA, Paris là một...", "🏙️", ["Animal", "Food", "City", "Toy"], 2, "City nghĩa là thành phố.", "english"],
        ["Captain PICA, French flag có màu blue, white và...", "🇫🇷", ["Green", "Red", "Yellow", "Black"], 1, "Red nghĩa là màu đỏ.", "country"],
        ["Captain PICA, croissant là...", "🥐", ["Hat", "Boat", "Flower", "Bread"], 3, "Bread nghĩa là bánh mì.", "english"],
        ["Captain PICA, Louvre Museum là nơi xem...", "🏛️", ["Art", "Bus", "Shoes", "Milk"], 0, "Art nghĩa là nghệ thuật.", "english"]
      ]),
      2: match([["🥖", "Baguette"], ["🎩", "Beret"], ["🧴", "Perfume"], ["🌳", "Garden"], ["⛵", "Seine boat"]]),
      3: hidden([{ icon: "⚜️", label: "Fleur-de-lis", x: 15, y: 18 }, { icon: "🗝️", label: "Palace key", x: 82, y: 20 }, { icon: "🛢️", label: "Wine barrel", x: 50, y: 45 }, { icon: "🛡️", label: "Shield", x: 20, y: 80 }, { icon: "📜", label: "Royal scroll", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Pháp: fleur-de-lis, palace key, wine barrel, shield, royal scroll."),
      4: mcq([
        ["Captain PICA sees: red apple, blue hat, green tree, yellow star. Which object is blue?", "🔵", ["Apple", "Hat", "Tree", "Star"], 1, "Blue hat nghĩa là chiếc mũ màu xanh dương.", "english"],
        ["Captain PICA, shape nào là circle?", "⭕", ["Square", "Triangle", "Circle", "Star"], 2, "Circle nghĩa là hình tròn.", "english"],
        ["Captain PICA, 2 coin và 3 coin là mấy?", "🪙", ["4", "6", "7", "5"], 3, "2 + 3 = 5.", "math"],
        ["Captain PICA, perfume là...", "🧴", ["Nước hoa", "Cái ghế", "Con cá", "Bút chì"], 0, "Perfume nghĩa là nước hoa.", "english"],
        ["Captain PICA, key dùng để...", "🗝️", ["Ăn bánh", "Mở khóa", "Tô màu", "Ngủ"], 1, "Key dùng để mở khóa.", "logic"]
      ]),
      5: mcq([
        ["Captain PICA, treasure là...", "🧰", ["Kho báu", "Cái ghế", "Con mèo", "Sữa"], 0, "Treasure nghĩa là kho báu.", "english"],
        ["Captain PICA reads: The treasure is near the red flag. Which flag should PICA follow?", "🚩", ["Blue", "Green", "Yellow", "Red"], 3, "Red flag là lá cờ màu đỏ.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói go right. Right nghĩa là...", "🗺️", ["Trái", "Phải", "Lên", "Xuống"], 1, "Right nghĩa là phải.", "logic"],
        ["Captain PICA, palace là...", "🏰", ["Cung điện", "Bánh ngọt", "Xe buýt", "Cái tất"], 0, "Palace nghĩa là cung điện.", "english"]
      ])
    }
  },
  russia: {
    POCA: {
      1: mcq([
        ["Captain POCA, thành phố nào là thủ đô của Nga?", "🏙️", ["Moscow", "Paris", "Tokyo", "Cairo"], 0, "Moscow là thủ đô của Nga.", "country"],
        ["Captain POCA, nhà thờ nhiều mái vòm màu sắc ở Moscow tên là gì?", "⛪", ["Eiffel Tower", "Pyramid", "Saint Basil's Cathedral", "Louvre"], 2, "Saint Basil's Cathedral là công trình nổi tiếng ở Moscow.", "country"],
        ["Captain POCA, cờ Nga có ba dải trắng, xanh dương và màu gì?", "🇷🇺", ["Vàng", "Đỏ", "Xanh lá", "Cam"], 1, "Cờ Nga có ba màu trắng, xanh dương và đỏ.", "country"],
        ["Captain POCA, mùa đông ở Nga thường có thứ gì màu trắng rơi xuống?", "❄️", ["Cát", "Lá khô", "Mưa sao", "Tuyết"], 3, "Tuyết thường xuất hiện trong mùa đông lạnh.", "science"],
        ["Captain POCA, búp bê nhiều lớp nổi tiếng của Nga gọi là gì?", "🪆", ["Matryoshka Doll", "Origami Crane", "Sombrero", "Kimono"], 0, "Matryoshka là búp bê nhiều lớp của Nga.", "country"]
      ]),
      2: match([["🗼", "Tháp Kremlin"], ["🐻", "Gấu Nga"], ["⛸️", "Giày trượt băng"], ["🧥", "Áo khoác mùa đông"], ["🌲", "Rừng Siberia"]]),
      3: hidden([{ icon: "🚀", label: "Tên lửa không gian", x: 15, y: 18 }, { icon: "🪖", label: "Mũ phi hành gia", x: 82, y: 20 }, { icon: "❄️", label: "Tinh thể băng", x: 50, y: 45 }, { icon: "🗝️", label: "Chìa khóa cung băng", x: 20, y: 80 }, { icon: "🧭", label: "La bàn đóng băng", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Nga: tên lửa không gian, mũ phi hành gia, tinh thể băng, chìa khóa cung băng và la bàn đóng băng."),
      4: mcq([
        ["Captain POCA, 6 rương băng, mỗi rương có 7 xu vàng. Có tất cả mấy xu?", "🪙", ["36", "40", "44", "42"], 3, "6 x 7 = 42 xu vàng.", "math"],
        ["Captain POCA, mật mã ghi 3 -> 12, 4 -> 16, 5 -> 20. Vậy 6 -> ?", "🔐", ["22", "24", "26", "28"], 1, "Quy luật là nhân 4, nên 6 -> 24.", "logic"],
        ["Captain POCA, khi nước bị lạnh dưới 0 độ C, nước thường chuyển thành gì?", "🧊", ["Hơi nước", "Cát", "Băng", "Khói"], 2, "Nước có thể đóng băng khi rất lạnh.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa nhất với frozen?", "📚", ["Very cold", "Very hot", "Very fast", "Very small"], 0, "Frozen nghĩa là bị đóng băng/rất lạnh.", "english"],
        ["Captain POCA đọc: The treasure was hidden beneath the frozen lake. Beneath nghĩa là gì?", "📖", ["Ở phía trên", "Bên cạnh", "Xung quanh", "Ở bên dưới"], 3, "Beneath nghĩa là ở bên dưới.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, trong Frozen Crystal Castle Mission, bản đồ ghi: đi North, qua 3 cột băng, rồi rẽ East. Cửa bí mật ở đâu?", "🗺️", ["Sau cầu pha lê", "Trong tiệm bánh", "Trên bãi biển", "Dưới sân bóng"], 0, "Đi đúng lộ trình sẽ tới sau cầu pha lê.", "logic"],
        ["Captain POCA đọc: The crystal key is hidden beyond the frozen bridge. Beyond nghĩa là gì?", "🌉", ["Bên trong", "Ở dưới", "Bên cạnh", "Xa hơn/vượt qua"], 3, "Beyond nghĩa là xa hơn hoặc vượt qua.", "english"],
        ["Captain POCA có 4 chìa bạc, 5 chìa vàng và 3 chìa pha lê. Tổng cộng có mấy chìa?", "🗝️", ["10", "11", "12", "13"], 2, "4 + 5 + 3 = 12 chìa.", "math"],
        ["Captain POCA, chuỗi ký hiệu là tuyết, sao, sao, tuyết, sao, sao, ?. Ký hiệu tiếp theo là gì?", "❄️", ["Ngôi sao", "Tuyết", "Mặt trăng", "Viên ngọc"], 1, "Mẫu lặp là tuyết rồi hai ngôi sao.", "logic"],
        ["Captain POCA, Nga nổi tiếng là quốc gia có diện tích như thế nào trên bản đồ thế giới?", "🗺️", ["Rất rộng", "Rất nhỏ", "Chỉ là một hòn đảo", "Nằm hoàn toàn dưới biển"], 0, "Nga là một trong những quốc gia rộng lớn nhất thế giới.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, Moscow là một...", "🏙️", ["City", "Food", "Animal", "Toy"], 0, "City nghĩa là thành phố.", "english"],
        ["Captain PICA, Saint Basil's Cathedral là một...", "⛪", ["Boat", "Cake", "Building", "Fish"], 2, "Building nghĩa là công trình/tòa nhà.", "country"],
        ["Captain PICA, Russian flag có màu white, blue và...", "🇷🇺", ["Green", "Red", "Yellow", "Black"], 1, "Red nghĩa là màu đỏ.", "country"],
        ["Captain PICA, snow có màu thường là...", "❄️", ["Red", "Blue", "Green", "White"], 3, "White nghĩa là màu trắng.", "english"],
        ["Captain PICA, Matryoshka là...", "🪆", ["Doll", "Shoes", "Milk", "Tree"], 0, "Doll nghĩa là búp bê.", "english"]
      ]),
      2: match([["🗼", "Kremlin tower"], ["🐻", "Bear"], ["⛸️", "Ice skates"], ["🧥", "Winter coat"], ["🌲", "Siberian forest"]]),
      3: hidden([{ icon: "🚀", label: "Space rocket", x: 15, y: 18 }, { icon: "🪖", label: "Cosmonaut helmet", x: 82, y: 20 }, { icon: "❄️", label: "Snow crystal", x: 50, y: 45 }, { icon: "🗝️", label: "Ice palace key", x: 20, y: 80 }, { icon: "🧭", label: "Frozen compass", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Nga: space rocket, helmet, snow crystal, ice palace key, frozen compass."),
      4: mcq([
        ["Captain PICA sees: white snow, blue coat, red flag, yellow star. Which object is blue?", "🔵", ["Snow", "Coat", "Flag", "Star"], 1, "Blue coat là áo khoác màu xanh dương.", "english"],
        ["Captain PICA, shape nào là star?", "⭐", ["Circle", "Triangle", "Star", "Square"], 2, "Star nghĩa là ngôi sao.", "english"],
        ["Captain PICA, 2 ice cube và 2 ice cube là mấy?", "🧊", ["3", "5", "6", "4"], 3, "2 + 2 = 4.", "math"],
        ["Captain PICA, coat dùng khi trời...", "🧥", ["Lạnh", "Ngọt", "Nhanh", "Tròn"], 0, "Áo khoác giúp giữ ấm khi trời lạnh.", "logic"],
        ["Captain PICA, frozen nghĩa là...", "🧊", ["Nóng", "Đóng băng", "Mềm", "Đỏ"], 1, "Frozen nghĩa là đóng băng.", "english"]
      ]),
      5: mcq([
        ["Captain PICA, crystal là...", "💎", ["Pha lê", "Cái ghế", "Con mèo", "Sữa"], 0, "Crystal nghĩa là pha lê.", "english"],
        ["Captain PICA reads: The treasure is near the blue ice door. Which door should PICA open?", "🚪", ["Red", "Green", "Yellow", "Blue"], 3, "Blue door là cánh cửa màu xanh dương.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói go up. Up nghĩa là...", "🗺️", ["Xuống", "Lên", "Trái", "Phải"], 1, "Up nghĩa là lên.", "logic"],
        ["Captain PICA, ice là...", "🧊", ["Băng", "Bánh ngọt", "Xe buýt", "Cái tất"], 0, "Ice nghĩa là băng.", "english"]
      ])
    }
  },
  mexico: {
    POCA: {
      1: mcq([
        ["Captain POCA, khu di tích cổ nổi tiếng ở Mexico tên là gì?", "🛕", ["Chichen Itza", "Big Ben", "Eiffel Tower", "Sydney Opera House"], 0, "Chichen Itza là khu di tích Maya nổi tiếng ở Mexico.", "country"],
        ["Captain POCA, cờ Mexico có ba dải xanh lá, trắng và màu gì?", "🇲🇽", ["Blue", "Yellow", "Red", "Black"], 2, "Cờ Mexico có ba màu xanh lá, trắng và đỏ.", "country"],
        ["Captain POCA, cây gai thường sống ở vùng khô của Mexico là cây gì?", "🌵", ["Bamboo", "Cactus", "Tulip", "Pine"], 1, "Cactus là cây xương rồng.", "science"],
        ["Captain POCA, nhóm nhạc truyền thống vui nhộn của Mexico gọi là gì?", "🎺", ["K-pop band", "Ballet group", "Taiko team", "Mariachi band"], 3, "Mariachi band là nhóm nhạc truyền thống nổi tiếng của Mexico.", "country"],
        ["Captain POCA, chiếc mũ rộng vành nổi tiếng của Mexico tên là gì?", "👒", ["Sombrero", "Beret", "Kimono hat", "Helmet"], 0, "Sombrero là chiếc mũ rộng vành quen thuộc ở Mexico.", "country"]
      ]),
      2: match([["🌮", "Bánh taco"], ["🪅", "Piñata"], ["🛡️", "Khiên Aztec"], ["🎭", "Mặt nạ lễ hội"], ["🍫", "Hạt cacao"]]),
      3: hidden([{ icon: "🪨", label: "Bảng đá kho báu Maya", x: 15, y: 18 }, { icon: "🐆", label: "Biểu tượng báo đốm", x: 82, y: 20 }, { icon: "🗝️", label: "Chìa khóa đền cổ", x: 50, y: 45 }, { icon: "☀️", label: "Đá mặt trời cổ", x: 20, y: 80 }, { icon: "🏺", label: "Bình nước sa mạc", x: 80, y: 78 }], "Captain POCA, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 báu vật Mexico: bảng đá kho báu Maya, biểu tượng báo đốm, chìa khóa đền cổ, đá mặt trời cổ và bình nước sa mạc."),
      4: mcq([
        ["Captain POCA, 8 rương kho báu, mỗi rương có 5 xu vàng. Có tất cả mấy xu?", "🪙", ["35", "38", "42", "40"], 3, "8 x 5 = 40 xu vàng.", "math"],
        ["Captain POCA, mật mã ghi 4 -> 12, 5 -> 15, 6 -> 18. Vậy 7 -> ?", "🔐", ["19", "21", "24", "27"], 1, "Quy luật là nhân 3, nên 7 -> 21.", "logic"],
        ["Captain POCA, cây xương rồng giữ nước tốt để sống ở nơi nào?", "🌵", ["Rừng tuyết", "Đại dương", "Vùng khô nóng", "Hang băng"], 2, "Xương rồng thích nghi tốt với vùng khô nóng.", "science"],
        ["Captain POCA, từ tiếng Anh nào gần nghĩa nhất với ancient?", "📚", ["Very old", "Very new", "Very fast", "Very small"], 0, "Ancient nghĩa là rất cổ xưa.", "english"],
        ["Captain POCA đọc: The explorer found the hidden temple beyond the jungle. Explorer nghĩa là gì?", "📖", ["Nông dân", "Giáo viên", "Tài xế", "Người khám phá"], 3, "Explorer là người khám phá địa điểm mới.", "english"]
      ]),
      5: mcq([
        ["Captain POCA, trong Lost Maya Temple Quest, bản đồ ghi: đi East, qua 3 bậc đá, rồi rẽ South. Cửa kho báu ở đâu?", "🗺️", ["Sau cổng rêu xanh", "Trong tiệm bánh", "Trên núi tuyết", "Dưới sân bóng"], 0, "Đi đúng lộ trình sẽ tới sau cổng rêu xanh.", "logic"],
        ["Captain POCA đọc: The treasure lies beyond the final stone gate. Lies nghĩa là gì trong câu này?", "🚪", ["Ngủ", "Chạy", "Trốn", "Nằm ở/được đặt ở"], 3, "Trong câu này, lies nghĩa là nằm ở hoặc được đặt ở.", "english"],
        ["Captain POCA có 5 chìa bạc, 4 chìa vàng và 3 chìa ngọc bích. Tổng cộng có mấy chìa?", "🗝️", ["10", "11", "12", "13"], 2, "5 + 4 + 3 = 12 chìa.", "math"],
        ["Captain POCA, chuỗi ký hiệu là mặt trời, báo đốm, báo đốm, mặt trời, báo đốm, báo đốm, ?. Ký hiệu tiếp theo là gì?", "☀️", ["Báo đốm", "Mặt trời", "Ngôi sao", "Giọt nước"], 1, "Mẫu lặp là mặt trời rồi hai báo đốm.", "logic"],
        ["Captain POCA, nền văn minh cổ nào đã xây dựng Chichen Itza?", "🛕", ["Maya", "Roman", "Viking", "Egyptian"], 0, "Chichen Itza là di tích của nền văn minh Maya.", "country"]
      ])
    },
    PICA: {
      1: mcq([
        ["Captain PICA, Chichen Itza là một...", "🛕", ["Ancient site", "Cake", "Fish", "Shoe"], 0, "Ancient site nghĩa là khu di tích cổ.", "country"],
        ["Captain PICA, Mexico flag có màu green, white và...", "🇲🇽", ["Blue", "Yellow", "Red", "Black"], 2, "Red nghĩa là màu đỏ.", "country"],
        ["Captain PICA, cactus là...", "🌵", ["Flower", "Cây xương rồng", "Boat", "Hat"], 1, "Cactus nghĩa là cây xương rồng.", "english"],
        ["Captain PICA, mariachi là nhóm...", "🎺", ["Dance", "Sport", "Cooking", "Music"], 3, "Mariachi là nhóm âm nhạc.", "country"],
        ["Captain PICA, sombrero là...", "👒", ["Mũ", "Sữa", "Con mèo", "Xe buýt"], 0, "Sombrero là một loại mũ rộng vành.", "english"]
      ]),
      2: match([["🌮", "Taco"], ["🪅", "Pinata"], ["🛡️", "Aztec shield"], ["🎭", "Festival mask"], ["🍫", "Chocolate bean"]]),
      3: hidden([{ icon: "🪨", label: "Maya tablet", x: 15, y: 18 }, { icon: "🐆", label: "Jaguar symbol", x: 82, y: 20 }, { icon: "🗝️", label: "Temple key", x: 50, y: 45 }, { icon: "☀️", label: "Sun stone", x: 20, y: 80 }, { icon: "🏺", label: "Water flask", x: 80, y: 78 }], "Captain PICA, tìm 5 vật Mexico: Maya tablet, jaguar symbol, temple key, sun stone, water flask."),
      4: mcq([
        ["Captain PICA sees: red pinata, blue mask, yellow sun, green cactus. Which object is blue?", "🔵", ["Pinata", "Mask", "Sun", "Cactus"], 1, "Blue mask là mặt nạ màu xanh dương.", "english"],
        ["Captain PICA, shape nào là circle?", "⭕", ["Square", "Triangle", "Circle", "Star"], 2, "Circle nghĩa là hình tròn.", "english"],
        ["Captain PICA, 2 taco và 3 taco là mấy?", "🌮", ["4", "6", "7", "5"], 3, "2 + 3 = 5.", "math"],
        ["Captain PICA, chocolate bean làm ra...", "🍫", ["Sô cô la", "Cái ghế", "Con cá", "Bút chì"], 0, "Chocolate bean là hạt cacao làm ra sô cô la.", "english"],
        ["Captain PICA, key dùng để...", "🗝️", ["Ăn bánh", "Mở khóa", "Tô màu", "Ngủ"], 1, "Key dùng để mở khóa.", "logic"]
      ]),
      5: mcq([
        ["Captain PICA, temple là...", "🛕", ["Ngôi đền", "Cái ghế", "Con mèo", "Sữa"], 0, "Temple nghĩa là ngôi đền.", "english"],
        ["Captain PICA reads: The treasure is near the yellow temple door. Which door should PICA choose?", "🚪", ["Blue", "Green", "Red", "Yellow"], 3, "Yellow door là cửa màu vàng.", "english"],
        ["Captain PICA, 1 key và 2 key là mấy?", "🗝️", ["2", "4", "3", "5"], 2, "1 + 2 = 3.", "math"],
        ["Captain PICA, map nói go left. Left nghĩa là...", "🗺️", ["Phải", "Trái", "Lên", "Xuống"], 1, "Left nghĩa là trái.", "logic"],
        ["Captain PICA, Maya là một nền văn minh cổ ở...", "🛕", ["Mexico", "Korea", "France", "Russia"], 0, "Maya gắn với các di tích cổ ở Mexico.", "country"]
      ])
    }
  }

};

function mcq(items) {
  return items.map((item, index) => ({
    id: `q${index + 1}`,
    type: "mcq",
    prompt: item[0],
    visual: item[1],
    options: item[2],
    answer: item[3],
    explanation: item[4],
    topic: item[5]
  }));
}

function match(pairs) {
  return pairs.map((pair, index) => ({
    id: `m${index + 1}`,
    type: "match",
    left: pair[0],
    right: pair[1],
    topic: "country"
  }));
}

function hidden(items, prompt) {
  const spots = [[16, 26], [68, 24], [36, 48], [78, 62], [20, 70]];
  return items.map((item, index) => ({
    id: `h${index + 1}`,
    type: "hidden",
    icon: Array.isArray(item) ? item[0] : item.icon || item,
    label: Array.isArray(item) ? item[1] : item.label,
    prompt,
    x: item.x ?? spots[index][0],
    y: item.y ?? spots[index][1],
    topic: "observation"
  }));
}

const GATE2_CLUES = {
  uk: {
    POCA: [["🛡️", "Khiên hiệp sĩ"], ["☎️", "Bốt điện thoại đỏ"], ["☂️", "Ô đi mưa"], ["🍵", "Trà chiều"], ["💎", "Vương miện báu vật"]],
    PICA: [["🛡️", "Shield"], ["☎️", "Phone box"], ["☂️", "Umbrella"], ["🍵", "Tea"], ["💎", "Crown jewel"]]
  },
  russia: {
    POCA: [["🪆", "Búp bê Matryoshka"], ["🩰", "Giày múa ballet"], ["🫖", "Ấm samovar"], ["🌳", "Cây bạch dương"], ["🛰️", "Tàu không gian"]],
    PICA: [["🪆", "Doll"], ["🩰", "Ballet"], ["🫖", "Tea pot"], ["🌳", "Tree"], ["🛰️", "Space ship"]]
  },
  mexico: {
    POCA: [["🪇", "Maracas"], ["🪅", "Piñata"], ["🍫", "Hạt cacao"], ["🎸", "Đàn mariachi"], ["🎊", "Giấy papel picado"]],
    PICA: [["🪇", "Maracas"], ["🪅", "Pinata"], ["🍫", "Cacao"], ["🎸", "Guitar"], ["🎊", "Paper flags"]]
  }
};

function placeholderPack(country) {
  const pairs = country.symbols.concat([["🧭", country.finalQuest]]).slice(0, 5);
  const gate2 = GATE2_CLUES[country.id] || { POCA: pairs, PICA: pairs };
  const makeMcq = playerName => mcq([
    [`${playerName}, chọn biểu tượng nổi tiếng của ${country.name}.`, country.icon, [pairs[0][1], "Tên lửa", "Sushi", "Kim tự tháp"], 0, `${pairs[0][1]} thuộc ${country.name}.`, "country"],
    [`${playerName}, lá cờ nào thuộc ${country.name}?`, country.flag, [country.flag, "🇯🇵", "🇺🇸", "🇫🇷"], 0, `Đây là lá cờ của ${country.name}.`, "country"],
    [`${playerName}, tìm một điều nổi tiếng của ${country.name}.`, pairs[1][0], [pairs[1][1], "Sông Mekong", "Núi Phú Sĩ", "NASA"], 0, `${pairs[1][1]} gắn với ${country.name}.`, "country"],
    [`${playerName}, đếm 2 nhóm, mỗi nhóm có 2 sticker du lịch. Có mấy sticker?`, "🎟️", ["3", "4", "5", "6"], 1, "2 + 2 = 4.", "math"],
    [`${playerName}, từ tiếng Anh nào nghĩa là bản đồ?`, "🗺️", ["Map", "Cat", "Milk", "Sock"], 0, "Map nghĩa là bản đồ.", "english"]
  ]);
  return {
    POCA: { 1: makeMcq("POCA"), 2: match(gate2.POCA), 3: hidden(pairs.map(p => p[0]), `POCA hãy tìm 5 vật phẩm của ${country.name}.`), 4: makeMcq("POCA"), 5: makeMcq("POCA") },
    PICA: { 1: makeMcq("PICA"), 2: match(gate2.PICA), 3: hidden(pairs.map(p => p[0]), `PICA tìm 5 vật phẩm của ${country.name}.`), 4: makeMcq("PICA"), 5: makeMcq("PICA") }
  };
}

const COUNTRIES = COUNTRY_BASICS.map(country => ({
  ...country,
  gates: PACKS[country.id] || placeholderPack(country)
}));
