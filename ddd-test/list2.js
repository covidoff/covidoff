function fillDistricts() {
    // this function is used to fill the Districts list on load
    // addOption(document.drop_list.Districts, "ANDAMAN AND NICOBAR ISLANDS", "ANDAMAN AND NICOBAR ISLANDS", "");
    // addOption(document.drop_list.Districts, "ANDHRA PRADESH", "ANDHRA PRADESH", "");
    // addOption(document.drop_list.Districts, "ARUNACHAL PRADESH", "ARUNACHAL PRADESH", "");
    // addOption(document.drop_list.Districts, "ASSAM", "ASSAM", "");
    // addOption(document.drop_list.Districts, "BIHAR", "BIHAR", "");
    // addOption(document.drop_list.Districts, "CHANDIGARH", "CHANDIGARH", "");
    // addOption(document.drop_list.Districts, "CHHATTISGARH", "CHHATTISGARH", "");
    // addOption(document.drop_list.Districts, "DELHI", "DELHI", "");
    // addOption(document.drop_list.Districts, "GOA", "GOA", "");
    // addOption(document.drop_list.Districts, "GUJARAT", "GUJARAT", "");
    // addOption(document.drop_list.Districts, "HARYANA", "HARYANA", "");
    // addOption(document.drop_list.Districts, "HIMACHAL PRADESH", "HIMACHAL PRADESH", "");
    // addOption(document.drop_list.Districts, "JAMMU AND KASHMIR", "JAMMU AND KASHMIR", "");
    // addOption(document.drop_list.Districts, "JHARKHAND", "JHARKHAND", "");
    // addOption(document.drop_list.Districts, "KARNATAKA", "KARNATAKA", "");
    // addOption(document.drop_list.Districts, "KERALA", "KERALA", "");
    // addOption(document.drop_list.Districts, "LADAKH", "LADAKH", "");
    // addOption(document.drop_list.Districts, "LAKSHADWEEP", "LAKSHADWEEP", "");
    // addOption(document.drop_list.Districts, "MADHYA PRADESH", "MADHYA PRADESH", "");
    // addOption(document.drop_list.Districts, "MAHARASHTRA", "MAHARASHTRA", "");
    // addOption(document.drop_list.Districts, "MANIPUR", "MANIPUR", "");
    // addOption(document.drop_list.Districts, "MEGHALAYA", "MEGHALAYA", "");
    // addOption(document.drop_list.Districts, "MIZORAM", "MIZORAM", "");
    // addOption(document.drop_list.Districts, "NAGALAND", "NAGALAND", "");
    // addOption(document.drop_list.Districts, "ODISHA", "ODISHA", "");
    // addOption(document.drop_list.Districts, "PUDUCHERRY", "PUDUCHERRY", "");
    // addOption(document.drop_list.Districts, "PUNJAB", "PUNJAB", "");
    // addOption(document.drop_list.Districts, "RAJASTHAN", "RAJASTHAN", "");
    // addOption(document.drop_list.Districts, "SIKKIM", "SIKKIM", "");
    // addOption(document.drop_list.Districts, "TAMIL NADU", "TAMIL NADU", "");
    // addOption(document.drop_list.Districts, "TELANGANA", "TELANGANA", "");
    // addOption(document.drop_list.Districts, "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "");
    // addOption(document.drop_list.Districts, "TRIPURA", "TRIPURA", "");
    // addOption(document.drop_list.Districts, "UTTARAKHAND", "UTTARAKHAND", "");
    // addOption(document.drop_list.Districts, "UTTAR PRADESH", "UTTAR PRADESH", "");
    // addOption(document.drop_list.Districts, "WEST BENGAL", "WEST BENGAL", "");
    addOption(document.drop_list.Districts, "Birbhum", "Birbhum", "");
    addOption(document.drop_list.Districts, "Coochbehar", "Coochbehar", "");
    addOption(document.drop_list.Districts, "Dakshin Dinajpur", "Dakshin Dinajpur", "");
    addOption(document.drop_list.Districts, "Darjeeling", "Darjeeling", "");
    addOption(document.drop_list.Districts, "Hooghly", "Hooghly", "");
    addOption(document.drop_list.Districts, "Howrah", "Howrah", "");
    addOption(document.drop_list.Districts, "Jalpaiguri", "Jalpaiguri", "");
    addOption(document.drop_list.Districts, "Kolkata", "Kolkata", "");
    addOption(document.drop_list.Districts, "Maldah", "Maldah", "");
    addOption(document.drop_list.Districts, "Medinipur East", "Medinipur East", "");
    addOption(document.drop_list.Districts, "Medinipur West", "Medinipur West", "");
    addOption(document.drop_list.Districts, "Murshidabad", "Murshidabad", "");
    addOption(document.drop_list.Districts, "Nadia", "Nadia", "");
    addOption(document.drop_list.Districts, "North 24 Parganas", "North 24 Parganas", "");
    addOption(document.drop_list.Districts, "Paschim Bardhaman", "Paschim Bardhaman", "");
    addOption(document.drop_list.Districts, "Purba Bardhaman", "Purba Bardhaman", "");
    addOption(document.drop_list.Districts, "Purulia", "Purulia", "");
    addOption(document.drop_list.Districts, "South 24 Parganas", "South 24 Parganas", "");
    addOption(document.drop_list.Districts, "Uttar Dinajpur", "Uttar Dinajpur", "");

}

function SelectCities() {
    // ON selection of Districts this function will work

    removeAllOptions(document.drop_list.Cities);
    addOption(document.drop_list.Cities, "", "Cities", "");

    if (document.drop_list.Districts.value == 'Birbhum') {
        addOption(document.drop_list.Cities, "Ahmadpur", "Ahmadpur");
        addOption(document.drop_list.Cities, "Bolpur", "Bolpur");
        addOption(document.drop_list.Cities, "Dubrajpur", "Dubrajpur");
        addOption(document.drop_list.Cities, "Rampurhat", "Rampurhat");
        addOption(document.drop_list.Cities, "Sainthia", "Sainthia");
        addOption(document.drop_list.Cities, "Suri", "Suri");
    }
    if (document.drop_list.Districts.value == 'Coochbehar') {
        addOption(document.drop_list.Cities, "Bhangri Pratham Khanda", "Bhangri Pratham Khanda");
        addOption(document.drop_list.Cities, "Dinhata", "Dinhata");
        addOption(document.drop_list.Cities, "Guriahati", "Guriahati");
        addOption(document.drop_list.Cities, "Haldibari", "Haldibari");
        addOption(document.drop_list.Cities, "Khagrabari", "Khagrabari");
        addOption(document.drop_list.Cities, "Kharimala Khagrabari", "Kharimala Khagrabari");
        addOption(document.drop_list.Cities, "Coochbehar", "Coochbehar");
        addOption(document.drop_list.Cities, "Mathabhanga", "Mathabhanga");
        addOption(document.drop_list.Cities, "Mekliganj", "Mekliganj");
        addOption(document.drop_list.Cities, "Tufanganj", "Tufanganj");
    }
    if (document.drop_list.Districts.value == 'Dakshin Dinajpur') {
        addOption(document.drop_list.Cities, "Balurghat", "Balurghat");
        addOption(document.drop_list.Cities, "Gangarampur", "Gangarampur");
    }
    if (document.drop_list.Districts.value == 'Darjeeling') {
        addOption(document.drop_list.Cities, "Bairatisal", "Bairatisal");
        addOption(document.drop_list.Cities, "Cart Road", "Cart Road");
        addOption(document.drop_list.Cities, "Darjeeling", "Darjeeling");
        addOption(document.drop_list.Cities, "Kalimpong", "Kalimpong");
        addOption(document.drop_list.Cities, "Kurseong", "Kurseong");
        addOption(document.drop_list.Cities, "Mirik", "Mirik");
        addOption(document.drop_list.Cities, "Pattabong Tea Garden", "Pattabong Tea Garden");
        addOption(document.drop_list.Cities, "Siliguri", "Siliguri");
        addOption(document.drop_list.Cities, "Uttar Bagdogra", "Uttar Bagdogra");
    }
    if (document.drop_list.Districts.value == 'Hooghly') {
        addOption(document.drop_list.Cities, "Amodghata", "Amodghata");
        addOption(document.drop_list.Cities, "Arambag", "Arambag");
        addOption(document.drop_list.Cities, "Badhagachhi", "Badhagachhi");
        addOption(document.drop_list.Cities, "Baidyabati", "Baidyabati");
        addOption(document.drop_list.Cities, "Bamunari", "Bamunari");
        addOption(document.drop_list.Cities, "Bansberia", "Bansberia");
        addOption(document.drop_list.Cities, "Barijhati", "Barijhati");
        addOption(document.drop_list.Cities, "Begampur", "Begampur");
        addOption(document.drop_list.Cities, "Bhadreswar", "Bhadreswar");
        addOption(document.drop_list.Cities, "Chak Bansberia", "Chak Bansberia");
        addOption(document.drop_list.Cities, "Champdani", "Champdani");
        addOption(document.drop_list.Cities, "Chandannagar", "Chandannagar");
        addOption(document.drop_list.Cities, "Chikrand", "Chikrand");
        addOption(document.drop_list.Cities, "Dakshin Rajyadharpur", "Dakshin Rajyadharpur");
        addOption(document.drop_list.Cities, "Dharmapur", "Dharmapur");
        addOption(document.drop_list.Cities, "Garalgachha", "Garalgachha");
        addOption(document.drop_list.Cities, "Hooghly-Chinsurah", "Hooghly-Chinsurah");
        addOption(document.drop_list.Cities, "Kanaipur", "Kanaipur");
        addOption(document.drop_list.Cities, "Kharsarai", "Kharsarai");
        addOption(document.drop_list.Cities, "Kodalia", "Kodalia");
        addOption(document.drop_list.Cities, "Konnagar", "Konnagar");
        addOption(document.drop_list.Cities, "Krishnapur", "Krishnapur");
        addOption(document.drop_list.Cities, "Kulihanda", "Kulihanda");
        addOption(document.drop_list.Cities, "Madhusudanpur", "Madhusudanpur");
        addOption(document.drop_list.Cities, "Monoharpur", "Monoharpur");
        addOption(document.drop_list.Cities, "Mrigala", "Mrigala");
        addOption(document.drop_list.Cities, "Nabagram Colony", "Nabagram Colony");
        addOption(document.drop_list.Cities, "Pairagachha", "Pairagachha");
        addOption(document.drop_list.Cities, "Pandua", "Pandua");
        addOption(document.drop_list.Cities, "Purba Tajpur", "Purba Tajpur");
        addOption(document.drop_list.Cities, "Raghunathpur (PS-Dankuni)", "Raghunathpur (PS-Dankuni)");
        addOption(document.drop_list.Cities, "Raghunathpur (PS-Magra)", "Raghunathpur (PS-Magra)");
        addOption(document.drop_list.Cities, "Rishra", "Rishra");
        addOption(document.drop_list.Cities, "Rishra", "Rishra");
        addOption(document.drop_list.Cities, "Serampore", "Serampore");
        addOption(document.drop_list.Cities, "Shankhanagar", "Shankhanagar");
        addOption(document.drop_list.Cities, "Simla", "Simla");
        addOption(document.drop_list.Cities, "Singur", "Singur");
        addOption(document.drop_list.Cities, "Tarakeswar", "Tarakeswar");
        addOption(document.drop_list.Cities, "Uttarpara Kotrung", "Uttarpara Kotrung");
    }
    if (document.drop_list.Districts.value == 'Howrah') {
        addOption(document.drop_list.Cities, "Alpur", "Alpur");
        addOption(document.drop_list.Cities, "Andul", "Andul");
        addOption(document.drop_list.Cities, "Ankurhati", "Ankurhati");
        addOption(document.drop_list.Cities, "Argari", "Argari");
        addOption(document.drop_list.Cities, "Bagnan", "Bagnan");
        addOption(document.drop_list.Cities, "Balaram Pota", "Balaram Pota");
        addOption(document.drop_list.Cities, "Bally", "Bally");
        addOption(document.drop_list.Cities, "Bally", "Bally");
        addOption(document.drop_list.Cities, "Bankra", "Bankra");
        addOption(document.drop_list.Cities, "Banupur", "Banupur");
        addOption(document.drop_list.Cities, "Beldubi", "Beldubi");
        addOption(document.drop_list.Cities, "Bhandardaha", "Bhandardaha");
        addOption(document.drop_list.Cities, "Bikihakola", "Bikihakola");
        addOption(document.drop_list.Cities, "Bipra  Noapara", "Bipra  Noapara");
        addOption(document.drop_list.Cities, "Chakapara", "Chakapara");
        addOption(document.drop_list.Cities, "Chamrail", "Chamrail");
        addOption(document.drop_list.Cities, "Dakshin Jhapardaha", "Dakshin Jhapardaha");
        addOption(document.drop_list.Cities, "Dhuilya", "Dhuilya");
        addOption(document.drop_list.Cities, "Domjur", "Domjur");
        addOption(document.drop_list.Cities, "Eksara", "Eksara");
        addOption(document.drop_list.Cities, "Gabberia", "Gabberia");
        addOption(document.drop_list.Cities, "Howrah", "Howrah");
        addOption(document.drop_list.Cities, "Hatgachha", "Hatgachha");
        addOption(document.drop_list.Cities, "Jagadishpur", "Jagadishpur");
        addOption(document.drop_list.Cities, "Jala Kendua", "Jala Kendua");
        addOption(document.drop_list.Cities, "Jhorhat", "Jhorhat");
        addOption(document.drop_list.Cities, "Kalara", "Kalara");
        addOption(document.drop_list.Cities, "Kantlia", "Kantlia");
        addOption(document.drop_list.Cities, "Kesabpur", "Kesabpur");
        addOption(document.drop_list.Cities, "Khalia", "Khalia");
        addOption(document.drop_list.Cities, "Khalor", "Khalor");
        addOption(document.drop_list.Cities, "Khantora", "Khantora");
        addOption(document.drop_list.Cities, "Mahiari", "Mahiari");
        addOption(document.drop_list.Cities, "Makardaha", "Makardaha");
        addOption(document.drop_list.Cities, "Manikpur", "Manikpur");
        addOption(document.drop_list.Cities, "Mansinhapur", "Mansinhapur");
        addOption(document.drop_list.Cities, "Natibpur", "Natibpur");
        addOption(document.drop_list.Cities, "Naupala", "Naupala");
        addOption(document.drop_list.Cities, "Nibra", "Nibra");
        addOption(document.drop_list.Cities, "Panchla", "Panchla");
        addOption(document.drop_list.Cities, "Panchpara", "Panchpara");
        addOption(document.drop_list.Cities, "Paniara", "Paniara");
        addOption(document.drop_list.Cities, "Podara", "Podara");
        addOption(document.drop_list.Cities, "Raghudebbati", "Raghudebbati");
        addOption(document.drop_list.Cities, "Ramchandrapur", "Ramchandrapur");
        addOption(document.drop_list.Cities, "Sahapur", "Sahapur");
        addOption(document.drop_list.Cities, "Salap", "Salap");
        addOption(document.drop_list.Cities, "Sankrail", "Sankrail");
        addOption(document.drop_list.Cities, "Santoshpur", "Santoshpur");
        addOption(document.drop_list.Cities, "Sarenga", "Sarenga");
        addOption(document.drop_list.Cities, "Tentulkuli", "Tentulkuli");
        addOption(document.drop_list.Cities, "Uluberia", "Uluberia");
        addOption(document.drop_list.Cities, "Uttar Pirpur", "Uttar Pirpur");
    }
    if (document.drop_list.Districts.value == 'Jalpaiguri') {
        addOption(document.drop_list.Cities, "Alipurduar", "Alipurduar");
        addOption(document.drop_list.Cities, "Alipurduar Rly.Jnc.", "Alipurduar Rly.Jnc.");
        addOption(document.drop_list.Cities, "Banarhat Tea Garden", "Banarhat Tea Garden");
        addOption(document.drop_list.Cities, "Bholar Dabri", "Bholar Dabri");
        addOption(document.drop_list.Cities, "Chechakhata", "Chechakhata");
        addOption(document.drop_list.Cities, "Dhupguri", "Dhupguri");
        addOption(document.drop_list.Cities, "Falakata", "Falakata");
        addOption(document.drop_list.Cities, "Gairkata", "Gairkata");
        addOption(document.drop_list.Cities, "Jalpaiguri", "Jalpaiguri");
        addOption(document.drop_list.Cities, "Jaygaon", "Jaygaon");
        addOption(document.drop_list.Cities, "Mainaguri", "Mainaguri");
        addOption(document.drop_list.Cities, "Mal", "Mal");
        addOption(document.drop_list.Cities, "Paschim  Jitpur", "Paschim  Jitpur");
        addOption(document.drop_list.Cities, "Sobhaganj", "Sobhaganj");
        addOption(document.drop_list.Cities, "Uttar Kamakhyaguri", "Uttar Kamakhyaguri");
        addOption(document.drop_list.Cities, "Uttar Latabari", "Uttar Latabari");
    }
    if (document.drop_list.Districts.value == 'Kolkata') {
        addOption(document.drop_list.Cities, "Kolkata", "Kolkata");
        addOption(document.drop_list.Cities, "New Town", "New Town");
        addOption(document.drop_list.Cities, "Rajarhat", "Rajarhat");
        addOption(document.drop_list.Cities, "Salt Lake", "Salt Lake");
    }
    if (document.drop_list.Districts.value == 'Maldah') {
        addOption(document.drop_list.Cities, "Aiho", "Aiho");
        addOption(document.drop_list.Cities, "English Bazar", "English Bazar");
        addOption(document.drop_list.Cities, "Kachu Pukur", "Kachu Pukur");
        addOption(document.drop_list.Cities, "Kendua", "Kendua");
        addOption(document.drop_list.Cities, "Old Maldah", "Old Maldah");
    }
    if (document.drop_list.Districts.value == 'Medinipur East') {
        addOption(document.drop_list.Cities, "Bahirgram", "Bahirgram");
        addOption(document.drop_list.Cities, "Contai", "Contai");
        addOption(document.drop_list.Cities, "Dakshin Baguan", "Dakshin Baguan");
        addOption(document.drop_list.Cities, "Egra", "Egra");
        addOption(document.drop_list.Cities, "Goasafat", "Goasafat");
        addOption(document.drop_list.Cities, "Haldia", "Haldia");
        addOption(document.drop_list.Cities, "Kakdihi", "Kakdihi");
        addOption(document.drop_list.Cities, "Kolaghat", "Kolaghat");
        addOption(document.drop_list.Cities, "Tamluk", "Tamluk");
    }
    if (document.drop_list.Districts.value == 'Medinipur West') {
        addOption(document.drop_list.Cities, "Balichak", "Balichak");
        addOption(document.drop_list.Cities, "Chandrakona", "Chandrakona");
        addOption(document.drop_list.Cities, "Deuli", "Deuli");
        addOption(document.drop_list.Cities, "Durllabhganj", "Durllabhganj");
        addOption(document.drop_list.Cities, "Ghatal", "Ghatal");
        addOption(document.drop_list.Cities, "Kharagpur", "Kharagpur");
        addOption(document.drop_list.Cities, "Kharagpur Rly. Settlement ", "Kharagpur Rly. Settlement ");
        addOption(document.drop_list.Cities, "Kharar", "Kharar");
        addOption(document.drop_list.Cities, "Kshirpai", "Kshirpai");
        addOption(document.drop_list.Cities, "Medinipur", "Medinipur");
        addOption(document.drop_list.Cities, "Ramjibanpur", "Ramjibanpur");
        addOption(document.drop_list.Cities, "Balichak", "Balichak");
        addOption(document.drop_list.Cities, "Chandrakona", "Chandrakona");
        addOption(document.drop_list.Cities, "Deuli", "Deuli");
        addOption(document.drop_list.Cities, "Durllabhganj", "Durllabhganj");
        addOption(document.drop_list.Cities, "Ghatal", "Ghatal");
        addOption(document.drop_list.Cities, "Kharagpur", "Kharagpur");
        addOption(document.drop_list.Cities, "Kharagpur Rly. Settlement ", "Kharagpur Rly. Settlement ");
        addOption(document.drop_list.Cities, "Kharar", "Kharar");
        addOption(document.drop_list.Cities, "Kshirpai", "Kshirpai");
        addOption(document.drop_list.Cities, "Medinipur", "Medinipur");
        addOption(document.drop_list.Cities, "Ramjibanpur", "Ramjibanpur");
    }
    if (document.drop_list.Districts.value == 'Murshidabad') {
        addOption(document.drop_list.Cities, "Anup Nagar", "Anup Nagar");
        addOption(document.drop_list.Cities, "Aurangabad", "Aurangabad");
        addOption(document.drop_list.Cities, "Baharampur", "Baharampur");
        addOption(document.drop_list.Cities, "Beldanga", "Beldanga");
        addOption(document.drop_list.Cities, "Chachanda", "Chachanda");
        addOption(document.drop_list.Cities, "Charka", "Charka");
        addOption(document.drop_list.Cities, "Dafahat", "Dafahat");
        addOption(document.drop_list.Cities, "Dhulian", "Dhulian");
        addOption(document.drop_list.Cities, "Dhusaripara", "Dhusaripara");
        addOption(document.drop_list.Cities, "Farrakka Barrage Township", "Farrakka Barrage Township");
        addOption(document.drop_list.Cities, "Fatellapur", "Fatellapur");
        addOption(document.drop_list.Cities, "Ghorsala", "Ghorsala");
        addOption(document.drop_list.Cities, "Goaljan", "Goaljan");
        addOption(document.drop_list.Cities, "Gora Bazar", "Gora Bazar");
        addOption(document.drop_list.Cities, "Harharia Chak", "Harharia Chak");
        addOption(document.drop_list.Cities, "Jagtaj", "Jagtaj");
        addOption(document.drop_list.Cities, "Jangipur", "Jangipur");
        addOption(document.drop_list.Cities, "Jiaganj Azimganj", "Jiaganj Azimganj");
        addOption(document.drop_list.Cities, "Jot Kamal", "Jot Kamal");
        addOption(document.drop_list.Cities, "Kandi", "Kandi");
        addOption(document.drop_list.Cities, "Kankuria", "Kankuria");
        addOption(document.drop_list.Cities, "Kasim Bazar", "Kasim Bazar");
        addOption(document.drop_list.Cities, "Khodarampur", "Khodarampur");
        addOption(document.drop_list.Cities, "Murshidabad", "Murshidabad");
        addOption(document.drop_list.Cities, "Paschim Punropara", "Paschim Punropara");
        addOption(document.drop_list.Cities, "Sahajadpur", "Sahajadpur");
        addOption(document.drop_list.Cities, "Serpur", "Serpur");
        addOption(document.drop_list.Cities, "Srikantabati", "Srikantabati");
        addOption(document.drop_list.Cities, "Uttar Mahammadpur", "Uttar Mahammadpur");
    }
    if (document.drop_list.Districts.value == 'Nadia') {
        addOption(document.drop_list.Cities, "Aistala", "Aistala");
        addOption(document.drop_list.Cities, "Bablari Dewanganj", "Bablari Dewanganj");
        addOption(document.drop_list.Cities, "Baruihuda", "Baruihuda");
        addOption(document.drop_list.Cities, "Birnagar", "Birnagar");
        addOption(document.drop_list.Cities, "Chakdaha", "Chakdaha");
        addOption(document.drop_list.Cities, "Char Brahmanagar", "Char Brahmanagar");
        addOption(document.drop_list.Cities, "Char Maijdia", "Char Maijdia");
        addOption(document.drop_list.Cities, "Cooper's Camp", "Cooper's Camp");
        addOption(document.drop_list.Cities, "Darappur", "Darappur");
        addOption(document.drop_list.Cities, "Gayespur", "Gayespur");
        addOption(document.drop_list.Cities, "Gopalpur", "Gopalpur");
        addOption(document.drop_list.Cities, "Jagadanandapur", "Jagadanandapur");
        addOption(document.drop_list.Cities, "Kalyani", "Kalyani");
        addOption(document.drop_list.Cities, "Karimpur", "Karimpur");
        addOption(document.drop_list.Cities, "Krishnanagar", "Krishnanagar");
        addOption(document.drop_list.Cities, "Kshidirpur", "Kshidirpur");
        addOption(document.drop_list.Cities, "Madanpur", "Madanpur");
        addOption(document.drop_list.Cities, "Nabadwip", "Nabadwip");
        addOption(document.drop_list.Cities, "Nasra", "Nasra");
        addOption(document.drop_list.Cities, "Parbbatipur", "Parbbatipur");
        addOption(document.drop_list.Cities, "Phulia", "Phulia");
        addOption(document.drop_list.Cities, "Ranaghat", "Ranaghat");
        addOption(document.drop_list.Cities, "Santipur", "Santipur");
        addOption(document.drop_list.Cities, "Satigachha", "Satigachha");
        addOption(document.drop_list.Cities, "Taherpur", "Taherpur");
    }
    if (document.drop_list.Districts.value == 'North 24 Parganas') {
        addOption(document.drop_list.Cities, "Ashoknagar Kalyangarh", "Ashoknagar Kalyangarh");
        addOption(document.drop_list.Cities, "Baduria", "Baduria");
        addOption(document.drop_list.Cities, "Bangaon", "Bangaon");
        addOption(document.drop_list.Cities, "Bara Bamonia", "Bara Bamonia");
        addOption(document.drop_list.Cities, "Baranagar", "Baranagar");
        addOption(document.drop_list.Cities, "Barasat", "Barasat");
        addOption(document.drop_list.Cities, "Barrackpur", "Barrackpur");
        addOption(document.drop_list.Cities, "Barrackpur Cantonment", "Barrackpur Cantonment");
        addOption(document.drop_list.Cities, "Basirhat", "Basirhat");
        addOption(document.drop_list.Cities, "Bhatpara", "Bhatpara");
        addOption(document.drop_list.Cities, "Bidhan Nagar", "Bidhan Nagar");
        addOption(document.drop_list.Cities, "Chandpur", "Chandpur");
        addOption(document.drop_list.Cities, "Dhakuria", "Dhakuria");
        addOption(document.drop_list.Cities, "Dhanyakuria", "Dhanyakuria");
        addOption(document.drop_list.Cities, "Dumdum", "Dumdum");
        addOption(document.drop_list.Cities, "Garshyamnagar", "Garshyamnagar");
        addOption(document.drop_list.Cities, "Garulia", "Garulia");
        addOption(document.drop_list.Cities, "Gobardanga", "Gobardanga");
        addOption(document.drop_list.Cities, "Guma", "Guma");
        addOption(document.drop_list.Cities, "Habra", "Habra");
        addOption(document.drop_list.Cities, "Halisahar", "Halisahar");
        addOption(document.drop_list.Cities, "Ichhapur Defence  Estate", "Ichhapur Defence  Estate");
        addOption(document.drop_list.Cities, "Jafarpur", "Jafarpur");
        addOption(document.drop_list.Cities, "Jetia", "Jetia");
        addOption(document.drop_list.Cities, "Kamarhati", "Kamarhati");
        addOption(document.drop_list.Cities, "Kanchrapara", "Kanchrapara");
        addOption(document.drop_list.Cities, "Kaugachhi", "Kaugachhi");
        addOption(document.drop_list.Cities, "Khardaha", "Khardaha");
        addOption(document.drop_list.Cities, "Madhyamgram", "Madhyamgram");
        addOption(document.drop_list.Cities, "Maslandapur", "Maslandapur");
        addOption(document.drop_list.Cities, "Muragachha", "Muragachha");
        addOption(document.drop_list.Cities, "Naihati", "Naihati");
        addOption(document.drop_list.Cities, "Nebadhai Duttapukur", "Nebadhai Duttapukur");
        addOption(document.drop_list.Cities, "New Barrackpur", "New Barrackpur");
        addOption(document.drop_list.Cities, "Nokpul", "Nokpul");
        addOption(document.drop_list.Cities, "North Barrackpur", "North Barrackpur");
        addOption(document.drop_list.Cities, "North Dumdum", "North Dumdum");
        addOption(document.drop_list.Cities, "Panihati", "Panihati");
        addOption(document.drop_list.Cities, "Patulia", "Patulia");
        addOption(document.drop_list.Cities, "Raigachhi", "Raigachhi");
        addOption(document.drop_list.Cities, "Rajarhat Gopalpur", "Rajarhat Gopalpur");
        addOption(document.drop_list.Cities, "Ruiya", "Ruiya");
        addOption(document.drop_list.Cities, "Sadpur", "Sadpur");
        addOption(document.drop_list.Cities, "Sonatikiri", "Sonatikiri");
        addOption(document.drop_list.Cities, "South Dumdum", "South Dumdum");
        addOption(document.drop_list.Cities, "Taki", "Taki");
        addOption(document.drop_list.Cities, "Talbandha", "Talbandha");
        addOption(document.drop_list.Cities, "Titagarh", "Titagarh");
    }
    if (document.drop_list.Districts.value == 'Paschim Bardhaman') {
        addOption(document.drop_list.Cities, "Amkula", "Amkula");
        addOption(document.drop_list.Cities, "Amlajora", "Amlajora");
        addOption(document.drop_list.Cities, "Andal, Paschim Bardhaman", "Andal, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Arra, Paschim Bardhaman", "Arra, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Asansol", "Asansol");
        addOption(document.drop_list.Cities, "Bahula", "Bahula");
        addOption(document.drop_list.Cities, "Baidyanathpur, Paschim Bardhaman", "Baidyanathpur, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Baktarnagar", "Baktarnagar");
        addOption(document.drop_list.Cities, "Ballavpur", "Ballavpur");
        addOption(document.drop_list.Cities, "Bamunara", "Bamunara");
        addOption(document.drop_list.Cities, "Banagram, Paschim Bardhaman", "Banagram, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Banshra", "Banshra");
        addOption(document.drop_list.Cities, "Baska, Andal", "Baska, Andal");
        addOption(document.drop_list.Cities, "Belebathan", "Belebathan");
        addOption(document.drop_list.Cities, "Bhanowara", "Bhanowara");
        addOption(document.drop_list.Cities, "Bilpahari", "Bilpahari");
        addOption(document.drop_list.Cities, "Chak Bankola", "Chak Bankola");
        addOption(document.drop_list.Cities, "Chapui", "Chapui");
        addOption(document.drop_list.Cities, "Chelad", "Chelad");
        addOption(document.drop_list.Cities, "Chhora", "Chhora");
        addOption(document.drop_list.Cities, "Chinchuria", "Chinchuria");
        addOption(document.drop_list.Cities, "Chittaranjan", "Chittaranjan");
        addOption(document.drop_list.Cities, "Dakshin Khanda", "Dakshin Khanda");
        addOption(document.drop_list.Cities, "Dalurband", "Dalurband");
        addOption(document.drop_list.Cities, "Debipur, India", "Debipur, India");
        addOption(document.drop_list.Cities, "Dignala", "Dignala");
        addOption(document.drop_list.Cities, "Domohani", "Domohani");
        addOption(document.drop_list.Cities, "Durgapur", "Durgapur");
        addOption(document.drop_list.Cities, "Egara, Paschim Bardhaman", "Egara, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Gopalpur, Paschim Bardhaman", "Gopalpur, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Gulzarbagh Ukhra", "Gulzarbagh Ukhra");
        addOption(document.drop_list.Cities, "Haripur, Paschim Bardhaman", "Haripur, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Harishpur", "Harishpur");
        addOption(document.drop_list.Cities, "Ichhapur, Paschim Bardhaman", "Ichhapur, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Jemari (J.K. Nagar Township)", "Jemari (J.K. Nagar Township)");
        addOption(document.drop_list.Cities, "Kajora", "Kajora");
        addOption(document.drop_list.Cities, "Kanksa", "Kanksa");
        addOption(document.drop_list.Cities, "Kenda", "Kenda");
        addOption(document.drop_list.Cities, "Kendra Khottamdi", "Kendra Khottamdi");
        addOption(document.drop_list.Cities, "Khandra", "Khandra");
        addOption(document.drop_list.Cities, "Konardihi", "Konardihi");
        addOption(document.drop_list.Cities, "Kunustara", "Kunustara");
        addOption(document.drop_list.Cities, "Mahal, Paschim Bardhaman", "Mahal, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Mahira", "Mahira");
        addOption(document.drop_list.Cities, "Majiara", "Majiara");
        addOption(document.drop_list.Cities, "Mandarbani", "Mandarbani");
        addOption(document.drop_list.Cities, "Murgathaul", "Murgathaul");
        addOption(document.drop_list.Cities, "Nabaghanapur", "Nabaghanapur");
        addOption(document.drop_list.Cities, "Nabgram", "Nabgram");
        addOption(document.drop_list.Cities, "New Kenda", "New Kenda");
        addOption(document.drop_list.Cities, "Nimsa", "Nimsa");
        addOption(document.drop_list.Cities, "Palashban", "Palashban");
        addOption(document.drop_list.Cities, "Panagarh", "Panagarh");
        addOption(document.drop_list.Cities, "Pandabeswar", "Pandabeswar");
        addOption(document.drop_list.Cities, "Pangachhiya", "Pangachhiya");
        addOption(document.drop_list.Cities, "Panuria", "Panuria");
        addOption(document.drop_list.Cities, "Parashkol", "Parashkol");
        addOption(document.drop_list.Cities, "Parasia", "Parasia");
        addOption(document.drop_list.Cities, "Prayagpur", "Prayagpur");
        addOption(document.drop_list.Cities, "Raghunathchak", "Raghunathchak");
        addOption(document.drop_list.Cities, "Ramnagar, Pandaveswar", "Ramnagar, Pandaveswar");
        addOption(document.drop_list.Cities, "Ratibati", "Ratibati");
        addOption(document.drop_list.Cities, "Rupnarayanpur", "Rupnarayanpur");
        addOption(document.drop_list.Cities, "Sahebganj, Paschim Bardhaman", "Sahebganj, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Sankarpur, Paschim Bardhaman", "Sankarpur, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Sarpi, Paschim Bardhaman", "Sarpi, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Shyamsundarpur, Paschim Bardhaman", "Shyamsundarpur, Paschim Bardhaman");
        addOption(document.drop_list.Cities, "Siduli", "Siduli");
        addOption(document.drop_list.Cities, "Ukhra", "Ukhra");
        addOption(document.drop_list.Cities, "Sirsha, India", "Sirsha, India");
        addOption(document.drop_list.Cities, "Topsi", "Topsi");
        addOption(document.drop_list.Cities, "Alipur, Purba Bardhaman", "Alipur, Purba Bardhaman");
    }
    if (document.drop_list.Districts.value == 'Purba Bardhaman') {
        addOption(document.drop_list.Cities, "Bahir Sarbamangala", "Bahir Sarbamangala");
        addOption(document.drop_list.Cities, "Bardhaman", "Bardhaman");
        addOption(document.drop_list.Cities, "Bud Bud", "Bud Bud");
        addOption(document.drop_list.Cities, "Dainhat", "Dainhat");
        addOption(document.drop_list.Cities, "Dhatrigram", "Dhatrigram");
        addOption(document.drop_list.Cities, "Gangpur", "Gangpur");
        addOption(document.drop_list.Cities, "Goda, Purba Bardhaman", "Goda, Purba Bardhaman");
        addOption(document.drop_list.Cities, "Gopinathpur, West Bengal", "Gopinathpur, West Bengal");
        addOption(document.drop_list.Cities, "Guskara", "Guskara");
        addOption(document.drop_list.Cities, "Hatsimla", "Hatsimla");
        addOption(document.drop_list.Cities, "Jaluidanga", "Jaluidanga");
        addOption(document.drop_list.Cities, "Kalna City", "Kalna City");
        addOption(document.drop_list.Cities, "Katwa", "Katwa");
        addOption(document.drop_list.Cities, "Memari", "Memari");
        addOption(document.drop_list.Cities, "Mirzapur, Bardhaman", "Mirzapur, Bardhaman");
        addOption(document.drop_list.Cities, "Nari, Purba Bardhaman", "Nari, Purba Bardhaman");
        addOption(document.drop_list.Cities, "Nasratpur", "Nasratpur");
        addOption(document.drop_list.Cities, "Palsit", "Palsit");
        addOption(document.drop_list.Cities, "Panuhat", "Panuhat");
        addOption(document.drop_list.Cities, "Piarinagar", "Piarinagar");
        addOption(document.drop_list.Cities, "Raipur, Purba Bardhaman", "Raipur, Purba Bardhaman");
        addOption(document.drop_list.Cities, "Saktigarh, Bardhaman", "Saktigarh, Bardhaman");
        addOption(document.drop_list.Cities, "Seharabazar", "Seharabazar");
        addOption(document.drop_list.Cities, "Shashpur", "Shashpur");
        addOption(document.drop_list.Cities, "Sribati", "Sribati");
        addOption(document.drop_list.Cities, "Srirampur, Burdwan", "Srirampur, Burdwan");
        addOption(document.drop_list.Cities, "Sukdal", "Sukdal");
        addOption(document.drop_list.Cities, "Uttar Goara", "Uttar Goara");
    }
    if (document.drop_list.Districts.value == 'Purulia') {
        addOption(document.drop_list.Cities, "Adra", "Adra");
        addOption(document.drop_list.Cities, "Arra", "Arra");
        addOption(document.drop_list.Cities, "Balarampur", "Balarampur");
        addOption(document.drop_list.Cities, "Barabazar", "Barabazar");
        addOption(document.drop_list.Cities, "Chapari", "Chapari");
        addOption(document.drop_list.Cities, "Hijuli", "Hijuli");
        addOption(document.drop_list.Cities, "Jhalda", "Jhalda");
        addOption(document.drop_list.Cities, "Nabagram", "Nabagram");
        addOption(document.drop_list.Cities, "Par Beliya", "Par Beliya");
        addOption(document.drop_list.Cities, "Purulia", "Purulia");
        addOption(document.drop_list.Cities, "Raghunathpur", "Raghunathpur");
        addOption(document.drop_list.Cities, "Santaldih", "Santaldih");
    }
    if (document.drop_list.Districts.value == 'South 24 Parganas') {
        addOption(document.drop_list.Cities, "Amtala", "Amtala");
        addOption(document.drop_list.Cities, "Balarampur", "Balarampur");
        addOption(document.drop_list.Cities, "Baruipur", "Baruipur");
        addOption(document.drop_list.Cities, "Bhangar Raghunathpur", "Bhangar Raghunathpur");
        addOption(document.drop_list.Cities, "Bilandapur", "Bilandapur");
        addOption(document.drop_list.Cities, "Birlapur", "Birlapur");
        addOption(document.drop_list.Cities, "Bishnupur", "Bishnupur");
        addOption(document.drop_list.Cities, "Bowali", "Bowali");
        addOption(document.drop_list.Cities, "Budge Budge", "Budge Budge");
        addOption(document.drop_list.Cities, "Chak Enayetnagar", "Chak Enayetnagar");
        addOption(document.drop_list.Cities, "Chak Kashipur", "Chak Kashipur");
        addOption(document.drop_list.Cities, "Chata Kalikapur", "Chata Kalikapur");
        addOption(document.drop_list.Cities, "Diamond Harbour", "Diamond Harbour");
        addOption(document.drop_list.Cities, "Jaynagar Mazilpur", "Jaynagar Mazilpur");
        addOption(document.drop_list.Cities, "Kanyanagar", "Kanyanagar");
        addOption(document.drop_list.Cities, "Maheshtala", "Maheshtala");
        addOption(document.drop_list.Cities, "Pujali", "Pujali");
        addOption(document.drop_list.Cities, "Rajpur Sonarpur", "Rajpur Sonarpur");
        addOption(document.drop_list.Cities, "Uttar Durgapur", "Uttar Durgapur");
        addOption(document.drop_list.Cities, "Uttar Kalas", "Uttar Kalas");
        addOption(document.drop_list.Cities, "Uttar Raypur", "Uttar Raypur");
    }
    if (document.drop_list.Districts.value == 'Uttar Dinajpur') {
        addOption(document.drop_list.Cities, "Dalkhola", "Dalkhola");
        addOption(document.drop_list.Cities, "Islampur", "Islampur");
        addOption(document.drop_list.Cities, "Kaliaganj", "Kaliaganj");
        addOption(document.drop_list.Cities, "Kasba", "Kasba");
        addOption(document.drop_list.Cities, "Nachhratpur Katabari", "Nachhratpur Katabari");
        addOption(document.drop_list.Cities, "Raiganj", "Raiganj");
    }

}

function removeAllOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        //selectbox.options.remove(i);
        selectbox.remove(i);
    }
}


function addOption(selectbox, value, text) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;

    selectbox.options.add(optn);
}