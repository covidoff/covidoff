function fillCategory2() {
    // this function is used to fill the Category2 list on load
    addOption(document.drop_list2.Category2, "WEST BENGAL", "WEST BENGAL", "");
    addOption(document.drop_list2.Category2, "ANDAMAN AND NICOBAR ISLANDS", "ANDAMAN AND NICOBAR ISLANDS", "");
    addOption(document.drop_list2.Category2, "ANDHRA PRADESH", "ANDHRA PRADESH", "");
    addOption(document.drop_list2.Category2, "ARUNACHAL PRADESH", "ARUNACHAL PRADESH", "");
    addOption(document.drop_list2.Category2, "ASSAM", "ASSAM", "");
    addOption(document.drop_list2.Category2, "BIHAR", "BIHAR", "");
    addOption(document.drop_list2.Category2, "CHANDIGARH", "CHANDIGARH", "");
    addOption(document.drop_list2.Category2, "CHHATTISGARH", "CHHATTISGARH", "");
    addOption(document.drop_list2.Category2, "DELHI", "DELHI", "");
    addOption(document.drop_list2.Category2, "GOA", "GOA", "");
    addOption(document.drop_list2.Category2, "GUJARAT", "GUJARAT", "");
    addOption(document.drop_list2.Category2, "HARYANA", "HARYANA", "");
    addOption(document.drop_list2.Category2, "HIMACHAL PRADESH", "HIMACHAL PRADESH", "");
    addOption(document.drop_list2.Category2, "JAMMU AND KASHMIR", "JAMMU AND KASHMIR", "");
    addOption(document.drop_list2.Category2, "JHARKHAND", "JHARKHAND", "");
    addOption(document.drop_list2.Category2, "KARNATAKA", "KARNATAKA", "");
    addOption(document.drop_list2.Category2, "KERALA", "KERALA", "");
    addOption(document.drop_list2.Category2, "LADAKH", "LADAKH", "");
    addOption(document.drop_list2.Category2, "LAKSHADWEEP", "LAKSHADWEEP", "");
    addOption(document.drop_list2.Category2, "MADHYA PRADESH", "MADHYA PRADESH", "");
    addOption(document.drop_list2.Category2, "MAHARASHTRA", "MAHARASHTRA", "");
    addOption(document.drop_list2.Category2, "MANIPUR", "MANIPUR", "");
    addOption(document.drop_list2.Category2, "MEGHALAYA", "MEGHALAYA", "");
    addOption(document.drop_list2.Category2, "MIZORAM", "MIZORAM", "");
    addOption(document.drop_list2.Category2, "NAGALAND", "NAGALAND", "");
    addOption(document.drop_list2.Category2, "ODISHA", "ODISHA", "");
    addOption(document.drop_list2.Category2, "PUDUCHERRY", "PUDUCHERRY", "");
    addOption(document.drop_list2.Category2, "PUNJAB", "PUNJAB", "");
    addOption(document.drop_list2.Category2, "RAJASTHAN", "RAJASTHAN", "");
    addOption(document.drop_list2.Category2, "SIKKIM", "SIKKIM", "");
    addOption(document.drop_list2.Category2, "TAMIL NADU", "TAMIL NADU", "");
    addOption(document.drop_list2.Category2, "TELANGANA", "TELANGANA", "");
    addOption(document.drop_list2.Category2, "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "");
    addOption(document.drop_list2.Category2, "TRIPURA", "TRIPURA", "");
    addOption(document.drop_list2.Category2, "UTTARAKHAND", "UTTARAKHAND", "");
    addOption(document.drop_list2.Category2, "UTTAR PRADESH", "UTTAR PRADESH", "");
    addOption(document.drop_list2.Category2, "WEST BENGAL", "WEST BENGAL", "");


}

function SelectSubCat2() {
    // ON selection of Category2 this function will work

    removeAllOptions(document.drop_list2.SubCat2);
    addOption(document.drop_list2.SubCat2, "", "SubCat2", "");

    if (document.drop_list2.Category2.value == 'ANDAMAN AND NICOBAR ISLANDS') {
        addOption(document.drop_list2.SubCat2, "NICOBARS", "NICOBARS");
        addOption(document.drop_list2.SubCat2, "NORTH AND MIDDLE ANDAMAN", "NORTH AND MIDDLE ANDAMAN");
        addOption(document.drop_list2.SubCat2, "SOUTH ANDAMANS", "SOUTH ANDAMANS");
    }
    if (document.drop_list2.Category2.value == 'ANDHRA PRADESH') {
        addOption(document.drop_list2.SubCat2, "ANANTAPUR", "ANANTAPUR");
        addOption(document.drop_list2.SubCat2, "CHITTOOR", "CHITTOOR");
        addOption(document.drop_list2.SubCat2, "EAST GODAVARI", "EAST GODAVARI");
        addOption(document.drop_list2.SubCat2, "GUNTUR", "GUNTUR");
        addOption(document.drop_list2.SubCat2, "KRISHNA", "KRISHNA");
        addOption(document.drop_list2.SubCat2, "KURNOOL", "KURNOOL");
        addOption(document.drop_list2.SubCat2, "PRAKASAM", "PRAKASAM");
        addOption(document.drop_list2.SubCat2, "SPSR NELLORE", "SPSR NELLORE");
        addOption(document.drop_list2.SubCat2, "SRIKAKULAM", "SRIKAKULAM");
        addOption(document.drop_list2.SubCat2, "VISAKHAPATANAM", "VISAKHAPATANAM");
        addOption(document.drop_list2.SubCat2, "VIZIANAGARAM", "VIZIANAGARAM");
        addOption(document.drop_list2.SubCat2, "WEST GODAVARI", "WEST GODAVARI");
        addOption(document.drop_list2.SubCat2, "Y.S.R.", "Y.S.R.");
    }
    if (document.drop_list2.Category2.value == 'ARUNACHAL PRADESH') {
        addOption(document.drop_list2.SubCat2, "ANJAW", "ANJAW");
        addOption(document.drop_list2.SubCat2, "CHANGLANG", "CHANGLANG");
        addOption(document.drop_list2.SubCat2, "DIBANG VALLEY", "DIBANG VALLEY");
        addOption(document.drop_list2.SubCat2, "EAST KAMENG", "EAST KAMENG");
        addOption(document.drop_list2.SubCat2, "EAST SIANG", "EAST SIANG");
        addOption(document.drop_list2.SubCat2, "KAMLE", "KAMLE");
        addOption(document.drop_list2.SubCat2, "KRA DAADI", "KRA DAADI");
        addOption(document.drop_list2.SubCat2, "KURUNG KUMEY", "KURUNG KUMEY");
        addOption(document.drop_list2.SubCat2, "LEPARADA", "LEPARADA");
        addOption(document.drop_list2.SubCat2, "LOHIT", "LOHIT");
        addOption(document.drop_list2.SubCat2, "LONGDING", "LONGDING");
        addOption(document.drop_list2.SubCat2, "LOWER DIBANG VALLEY", "LOWER DIBANG VALLEY");
        addOption(document.drop_list2.SubCat2, "LOWER SIANG", "LOWER SIANG");
        addOption(document.drop_list2.SubCat2, "LOWER SUBANSIRI", "LOWER SUBANSIRI");
        addOption(document.drop_list2.SubCat2, "NAMSAI", "NAMSAI");
        addOption(document.drop_list2.SubCat2, "PAKKE KESSANG", "PAKKE KESSANG");
        addOption(document.drop_list2.SubCat2, "PAPUM PARE", "PAPUM PARE");
        addOption(document.drop_list2.SubCat2, "SHI YOMI", "SHI YOMI");
        addOption(document.drop_list2.SubCat2, "SIANG", "SIANG");
        addOption(document.drop_list2.SubCat2, "TAWANG", "TAWANG");
        addOption(document.drop_list2.SubCat2, "TIRAP", "TIRAP");
        addOption(document.drop_list2.SubCat2, "UPPER SIANG", "UPPER SIANG");
        addOption(document.drop_list2.SubCat2, "UPPER SUBANSIRI", "UPPER SUBANSIRI");
        addOption(document.drop_list2.SubCat2, "WEST KAMENG", "WEST KAMENG");
        addOption(document.drop_list2.SubCat2, "WEST SIANG", "WEST SIANG");
    }
    if (document.drop_list2.Category2.value == 'ASSAM') {
        addOption(document.drop_list2.SubCat2, "BAKSA", "BAKSA");
        addOption(document.drop_list2.SubCat2, "BARPETA", "BARPETA");
        addOption(document.drop_list2.SubCat2, "Biswanath", "Biswanath");
        addOption(document.drop_list2.SubCat2, "BONGAIGAON", "BONGAIGAON");
        addOption(document.drop_list2.SubCat2, "CACHAR", "CACHAR");
        addOption(document.drop_list2.SubCat2, "CHARAIDEO", "CHARAIDEO");
        addOption(document.drop_list2.SubCat2, "CHIRANG", "CHIRANG");
        addOption(document.drop_list2.SubCat2, "DARRANG", "DARRANG");
        addOption(document.drop_list2.SubCat2, "DHEMAJI", "DHEMAJI");
        addOption(document.drop_list2.SubCat2, "DHUBRI", "DHUBRI");
        addOption(document.drop_list2.SubCat2, "DIBRUGARH", "DIBRUGARH");
        addOption(document.drop_list2.SubCat2, "DIMA HASAO", "DIMA HASAO");
        addOption(document.drop_list2.SubCat2, "GOALPARA", "GOALPARA");
        addOption(document.drop_list2.SubCat2, "GOLAGHAT", "GOLAGHAT");
        addOption(document.drop_list2.SubCat2, "HAILAKANDI", "HAILAKANDI");
        addOption(document.drop_list2.SubCat2, "HOJAI", "HOJAI");
        addOption(document.drop_list2.SubCat2, "JORHAT", "JORHAT");
        addOption(document.drop_list2.SubCat2, "KAMRUP", "KAMRUP");
        addOption(document.drop_list2.SubCat2, "KAMRUP METRO", "KAMRUP METRO");
        addOption(document.drop_list2.SubCat2, "KARBI ANGLONG", "KARBI ANGLONG");
        addOption(document.drop_list2.SubCat2, "KARIMGANJ", "KARIMGANJ");
        addOption(document.drop_list2.SubCat2, "KOKRAJHAR", "KOKRAJHAR");
        addOption(document.drop_list2.SubCat2, "LAKHIMPUR", "LAKHIMPUR");
        addOption(document.drop_list2.SubCat2, "MAJULI", "MAJULI");
        addOption(document.drop_list2.SubCat2, "MARIGAON", "MARIGAON");
        addOption(document.drop_list2.SubCat2, "NAGAON", "NAGAON");
        addOption(document.drop_list2.SubCat2, "NALBARI", "NALBARI");
        addOption(document.drop_list2.SubCat2, "SIVASAGAR", "SIVASAGAR");
        addOption(document.drop_list2.SubCat2, "SONITPUR", "SONITPUR");
        addOption(document.drop_list2.SubCat2, "SOUTH SALMARA MANCACHAR", "SOUTH SALMARA MANCACHAR");
        addOption(document.drop_list2.SubCat2, "TINSUKIA", "TINSUKIA");
        addOption(document.drop_list2.SubCat2, "UDALGURI", "UDALGURI");
        addOption(document.drop_list2.SubCat2, "WEST KARBI ANGLONG", "WEST KARBI ANGLONG");
    }
    if (document.drop_list2.Category2.value == 'BIHAR') {
        addOption(document.drop_list2.SubCat2, "ARARIA", "ARARIA");
        addOption(document.drop_list2.SubCat2, "ARWAL", "ARWAL");
        addOption(document.drop_list2.SubCat2, "AURANGABAD", "AURANGABAD");
        addOption(document.drop_list2.SubCat2, "BANKA", "BANKA");
        addOption(document.drop_list2.SubCat2, "BEGUSARAI", "BEGUSARAI");
        addOption(document.drop_list2.SubCat2, "BHAGALPUR", "BHAGALPUR");
        addOption(document.drop_list2.SubCat2, "BHOJPUR", "BHOJPUR");
        addOption(document.drop_list2.SubCat2, "BUXAR", "BUXAR");
        addOption(document.drop_list2.SubCat2, "DARBHANGA", "DARBHANGA");
        addOption(document.drop_list2.SubCat2, "GAYA", "GAYA");
        addOption(document.drop_list2.SubCat2, "GOPALGANJ", "GOPALGANJ");
        addOption(document.drop_list2.SubCat2, "JAMUI", "JAMUI");
        addOption(document.drop_list2.SubCat2, "JEHANABAD", "JEHANABAD");
        addOption(document.drop_list2.SubCat2, "KAIMUR (BHABUA)", "KAIMUR (BHABUA)");
        addOption(document.drop_list2.SubCat2, "KATIHAR", "KATIHAR");
        addOption(document.drop_list2.SubCat2, "KHAGARIA", "KHAGARIA");
        addOption(document.drop_list2.SubCat2, "KISHANGANJ", "KISHANGANJ");
        addOption(document.drop_list2.SubCat2, "LAKHISARAI", "LAKHISARAI");
        addOption(document.drop_list2.SubCat2, "MADHEPURA", "MADHEPURA");
        addOption(document.drop_list2.SubCat2, "MADHUBANI", "MADHUBANI");
        addOption(document.drop_list2.SubCat2, "MUNGER", "MUNGER");
        addOption(document.drop_list2.SubCat2, "MUZAFFARPUR", "MUZAFFARPUR");
        addOption(document.drop_list2.SubCat2, "NALANDA", "NALANDA");
        addOption(document.drop_list2.SubCat2, "NAWADA", "NAWADA");
        addOption(document.drop_list2.SubCat2, "PASHCHIM CHAMPARAN", "PASHCHIM CHAMPARAN");
        addOption(document.drop_list2.SubCat2, "PATNA", "PATNA");
        addOption(document.drop_list2.SubCat2, "PURBI CHAMPARAN", "PURBI CHAMPARAN");
        addOption(document.drop_list2.SubCat2, "PURNIA", "PURNIA");
        addOption(document.drop_list2.SubCat2, "ROHTAS", "ROHTAS");
        addOption(document.drop_list2.SubCat2, "SAHARSA", "SAHARSA");
        addOption(document.drop_list2.SubCat2, "SAMASTIPUR", "SAMASTIPUR");
        addOption(document.drop_list2.SubCat2, "SARAN", "SARAN");
        addOption(document.drop_list2.SubCat2, "SHEIKHPURA", "SHEIKHPURA");
        addOption(document.drop_list2.SubCat2, "SHEOHAR", "SHEOHAR");
        addOption(document.drop_list2.SubCat2, "SITAMARHI", "SITAMARHI");
        addOption(document.drop_list2.SubCat2, "SIWAN", "SIWAN");
        addOption(document.drop_list2.SubCat2, "SUPAUL", "SUPAUL");
        addOption(document.drop_list2.SubCat2, "VAISHALI", "VAISHALI");
    }
    if (document.drop_list2.Category2.value == 'CHANDIGARH') {
        addOption(document.drop_list2.SubCat2, "CHANDIGARH", "CHANDIGARH");
    }
    if (document.drop_list2.Category2.value == 'CHHATTISGARH') {
        addOption(document.drop_list2.SubCat2, "BALOD", "BALOD");
        addOption(document.drop_list2.SubCat2, "BALODA BAZAR", "BALODA BAZAR");
        addOption(document.drop_list2.SubCat2, "BALRAMPUR", "BALRAMPUR");
        addOption(document.drop_list2.SubCat2, "BASTAR", "BASTAR");
        addOption(document.drop_list2.SubCat2, "BEMETARA", "BEMETARA");
        addOption(document.drop_list2.SubCat2, "BIJAPUR", "BIJAPUR");
        addOption(document.drop_list2.SubCat2, "BILASPUR", "BILASPUR");
        addOption(document.drop_list2.SubCat2, "DANTEWADA", "DANTEWADA");
        addOption(document.drop_list2.SubCat2, "DHAMTARI", "DHAMTARI");
        addOption(document.drop_list2.SubCat2, "DURG", "DURG");
        addOption(document.drop_list2.SubCat2, "GARIYABAND", "GARIYABAND");
        addOption(document.drop_list2.SubCat2, "Gaurella Pendra Marwahi", "Gaurella Pendra Marwahi");
        addOption(document.drop_list2.SubCat2, "JANJGIR-CHAMPA", "JANJGIR-CHAMPA");
        addOption(document.drop_list2.SubCat2, "JASHPUR", "JASHPUR");
        addOption(document.drop_list2.SubCat2, "KABIRDHAM", "KABIRDHAM");
        addOption(document.drop_list2.SubCat2, "KANKER", "KANKER");
        addOption(document.drop_list2.SubCat2, "KONDAGAON", "KONDAGAON");
        addOption(document.drop_list2.SubCat2, "KORBA", "KORBA");
        addOption(document.drop_list2.SubCat2, "KOREA", "KOREA");
        addOption(document.drop_list2.SubCat2, "MAHASAMUND", "MAHASAMUND");
        addOption(document.drop_list2.SubCat2, "MUNGELI", "MUNGELI");
        addOption(document.drop_list2.SubCat2, "NARAYANPUR", "NARAYANPUR");
        addOption(document.drop_list2.SubCat2, "RAIGARH", "RAIGARH");
        addOption(document.drop_list2.SubCat2, "RAIPUR", "RAIPUR");
        addOption(document.drop_list2.SubCat2, "RAJNANDGAON", "RAJNANDGAON");
        addOption(document.drop_list2.SubCat2, "SUKMA", "SUKMA");
        addOption(document.drop_list2.SubCat2, "SURAJPUR", "SURAJPUR");
        addOption(document.drop_list2.SubCat2, "SURGUJA", "SURGUJA");
    }
    if (document.drop_list2.Category2.value == 'DELHI') {
        addOption(document.drop_list2.SubCat2, "CENTRAL", "CENTRAL");
        addOption(document.drop_list2.SubCat2, "EAST", "EAST");
        addOption(document.drop_list2.SubCat2, "NEW DELHI", "NEW DELHI");
        addOption(document.drop_list2.SubCat2, "NORTH", "NORTH");
        addOption(document.drop_list2.SubCat2, "NORTH EAST", "NORTH EAST");
        addOption(document.drop_list2.SubCat2, "NORTH WEST", "NORTH WEST");
        addOption(document.drop_list2.SubCat2, "SHAHDARA", "SHAHDARA");
        addOption(document.drop_list2.SubCat2, "SOUTH", "SOUTH");
        addOption(document.drop_list2.SubCat2, "South East", "South East");
        addOption(document.drop_list2.SubCat2, "SOUTH WEST", "SOUTH WEST");
        addOption(document.drop_list2.SubCat2, "WEST", "WEST");
    }
    if (document.drop_list2.Category2.value == 'GOA') {
        addOption(document.drop_list2.SubCat2, "NORTH GOA", "NORTH GOA");
        addOption(document.drop_list2.SubCat2, "SOUTH GOA", "SOUTH GOA");
    }
    if (document.drop_list2.Category2.value == 'GUJARAT') {
        addOption(document.drop_list2.SubCat2, "AHMADABAD", "AHMADABAD");
        addOption(document.drop_list2.SubCat2, "AMRELI", "AMRELI");
        addOption(document.drop_list2.SubCat2, "ANAND", "ANAND");
        addOption(document.drop_list2.SubCat2, "ARVALLI", "ARVALLI");
        addOption(document.drop_list2.SubCat2, "BANAS KANTHA", "BANAS KANTHA");
        addOption(document.drop_list2.SubCat2, "BHARUCH", "BHARUCH");
        addOption(document.drop_list2.SubCat2, "BHAVNAGAR", "BHAVNAGAR");
        addOption(document.drop_list2.SubCat2, "BOTAD", "BOTAD");
        addOption(document.drop_list2.SubCat2, "CHHOTAUDEPUR", "CHHOTAUDEPUR");
        addOption(document.drop_list2.SubCat2, "DANG", "DANG");
        addOption(document.drop_list2.SubCat2, "DEVBHUMI DWARKA", "DEVBHUMI DWARKA");
        addOption(document.drop_list2.SubCat2, "DOHAD", "DOHAD");
        addOption(document.drop_list2.SubCat2, "GANDHINAGAR", "GANDHINAGAR");
        addOption(document.drop_list2.SubCat2, "GIR SOMNATH", "GIR SOMNATH");
        addOption(document.drop_list2.SubCat2, "JAMNAGAR", "JAMNAGAR");
        addOption(document.drop_list2.SubCat2, "JUNAGADH", "JUNAGADH");
        addOption(document.drop_list2.SubCat2, "KACHCHH", "KACHCHH");
        addOption(document.drop_list2.SubCat2, "KHEDA", "KHEDA");
        addOption(document.drop_list2.SubCat2, "MAHESANA", "MAHESANA");
        addOption(document.drop_list2.SubCat2, "Mahisagar", "Mahisagar");
        addOption(document.drop_list2.SubCat2, "MORBI", "MORBI");
        addOption(document.drop_list2.SubCat2, "NARMADA", "NARMADA");
        addOption(document.drop_list2.SubCat2, "NAVSARI", "NAVSARI");
        addOption(document.drop_list2.SubCat2, "PANCH MAHALS", "PANCH MAHALS");
        addOption(document.drop_list2.SubCat2, "PATAN", "PATAN");
        addOption(document.drop_list2.SubCat2, "PORBANDAR", "PORBANDAR");
        addOption(document.drop_list2.SubCat2, "RAJKOT", "RAJKOT");
        addOption(document.drop_list2.SubCat2, "SABAR KANTHA", "SABAR KANTHA");
        addOption(document.drop_list2.SubCat2, "SURAT", "SURAT");
        addOption(document.drop_list2.SubCat2, "SURENDRANAGAR", "SURENDRANAGAR");
        addOption(document.drop_list2.SubCat2, "TAPI", "TAPI");
        addOption(document.drop_list2.SubCat2, "VADODARA", "VADODARA");
        addOption(document.drop_list2.SubCat2, "VALSAD", "VALSAD");
    }
    if (document.drop_list2.Category2.value == 'HARYANA') {
        addOption(document.drop_list2.SubCat2, "AMBALA", "AMBALA");
        addOption(document.drop_list2.SubCat2, "BHIWANI", "BHIWANI");
        addOption(document.drop_list2.SubCat2, "CHARKI DADRI", "CHARKI DADRI");
        addOption(document.drop_list2.SubCat2, "FARIDABAD", "FARIDABAD");
        addOption(document.drop_list2.SubCat2, "FATEHABAD", "FATEHABAD");
        addOption(document.drop_list2.SubCat2, "GURUGRAM", "GURUGRAM");
        addOption(document.drop_list2.SubCat2, "HISAR", "HISAR");
        addOption(document.drop_list2.SubCat2, "JHAJJAR", "JHAJJAR");
        addOption(document.drop_list2.SubCat2, "JIND", "JIND");
        addOption(document.drop_list2.SubCat2, "KAITHAL", "KAITHAL");
        addOption(document.drop_list2.SubCat2, "KARNAL", "KARNAL");
        addOption(document.drop_list2.SubCat2, "KURUKSHETRA", "KURUKSHETRA");
        addOption(document.drop_list2.SubCat2, "MAHENDRAGARH", "MAHENDRAGARH");
        addOption(document.drop_list2.SubCat2, "NUH", "NUH");
        addOption(document.drop_list2.SubCat2, "PALWAL", "PALWAL");
        addOption(document.drop_list2.SubCat2, "PANCHKULA", "PANCHKULA");
        addOption(document.drop_list2.SubCat2, "PANIPAT", "PANIPAT");
        addOption(document.drop_list2.SubCat2, "REWARI", "REWARI");
        addOption(document.drop_list2.SubCat2, "ROHTAK", "ROHTAK");
        addOption(document.drop_list2.SubCat2, "SIRSA", "SIRSA");
        addOption(document.drop_list2.SubCat2, "SONIPAT", "SONIPAT");
        addOption(document.drop_list2.SubCat2, "YAMUNANAGAR", "YAMUNANAGAR");
    }
    if (document.drop_list2.Category2.value == 'HIMACHAL PRADESH') {
        addOption(document.drop_list2.SubCat2, "BILASPUR", "BILASPUR");
        addOption(document.drop_list2.SubCat2, "CHAMBA", "CHAMBA");
        addOption(document.drop_list2.SubCat2, "HAMIRPUR", "HAMIRPUR");
        addOption(document.drop_list2.SubCat2, "KANGRA", "KANGRA");
        addOption(document.drop_list2.SubCat2, "KINNAUR", "KINNAUR");
        addOption(document.drop_list2.SubCat2, "KULLU", "KULLU");
        addOption(document.drop_list2.SubCat2, "LAHUL AND SPITI", "LAHUL AND SPITI");
        addOption(document.drop_list2.SubCat2, "MANDI", "MANDI");
        addOption(document.drop_list2.SubCat2, "SHIMLA", "SHIMLA");
        addOption(document.drop_list2.SubCat2, "SIRMAUR", "SIRMAUR");
        addOption(document.drop_list2.SubCat2, "SOLAN", "SOLAN");
        addOption(document.drop_list2.SubCat2, "UNA", "UNA");
    }
    if (document.drop_list2.Category2.value == 'JAMMU AND KASHMIR') {
        addOption(document.drop_list2.SubCat2, "ANANTNAG", "ANANTNAG");
        addOption(document.drop_list2.SubCat2, "BANDIPORA", "BANDIPORA");
        addOption(document.drop_list2.SubCat2, "BARAMULLA", "BARAMULLA");
        addOption(document.drop_list2.SubCat2, "Budgam", "Budgam");
        addOption(document.drop_list2.SubCat2, "DODA", "DODA");
        addOption(document.drop_list2.SubCat2, "GANDERBAL", "GANDERBAL");
        addOption(document.drop_list2.SubCat2, "JAMMU", "JAMMU");
        addOption(document.drop_list2.SubCat2, "KATHUA", "KATHUA");
        addOption(document.drop_list2.SubCat2, "KISHTWAR", "KISHTWAR");
        addOption(document.drop_list2.SubCat2, "KULGAM", "KULGAM");
        addOption(document.drop_list2.SubCat2, "KUPWARA", "KUPWARA");
        addOption(document.drop_list2.SubCat2, "POONCH", "POONCH");
        addOption(document.drop_list2.SubCat2, "PULWAMA", "PULWAMA");
        addOption(document.drop_list2.SubCat2, "RAJOURI", "RAJOURI");
        addOption(document.drop_list2.SubCat2, "RAMBAN", "RAMBAN");
        addOption(document.drop_list2.SubCat2, "REASI", "REASI");
        addOption(document.drop_list2.SubCat2, "SAMBA", "SAMBA");
        addOption(document.drop_list2.SubCat2, "SHOPIAN", "SHOPIAN");
        addOption(document.drop_list2.SubCat2, "SRINAGAR", "SRINAGAR");
        addOption(document.drop_list2.SubCat2, "UDHAMPUR", "UDHAMPUR");
    }
    if (document.drop_list2.Category2.value == 'JHARKHAND') {
        addOption(document.drop_list2.SubCat2, "BOKARO", "BOKARO");
        addOption(document.drop_list2.SubCat2, "CHATRA", "CHATRA");
        addOption(document.drop_list2.SubCat2, "DEOGHAR", "DEOGHAR");
        addOption(document.drop_list2.SubCat2, "DHANBAD", "DHANBAD");
        addOption(document.drop_list2.SubCat2, "DUMKA", "DUMKA");
        addOption(document.drop_list2.SubCat2, "EAST SINGHBUM", "EAST SINGHBUM");
        addOption(document.drop_list2.SubCat2, "GARHWA", "GARHWA");
        addOption(document.drop_list2.SubCat2, "GIRIDIH", "GIRIDIH");
        addOption(document.drop_list2.SubCat2, "GODDA", "GODDA");
        addOption(document.drop_list2.SubCat2, "GUMLA", "GUMLA");
        addOption(document.drop_list2.SubCat2, "HAZARIBAGH", "HAZARIBAGH");
        addOption(document.drop_list2.SubCat2, "JAMTARA", "JAMTARA");
        addOption(document.drop_list2.SubCat2, "KHUNTI", "KHUNTI");
        addOption(document.drop_list2.SubCat2, "KODERMA", "KODERMA");
        addOption(document.drop_list2.SubCat2, "LATEHAR", "LATEHAR");
        addOption(document.drop_list2.SubCat2, "LOHARDAGA", "LOHARDAGA");
        addOption(document.drop_list2.SubCat2, "PAKUR", "PAKUR");
        addOption(document.drop_list2.SubCat2, "PALAMU", "PALAMU");
        addOption(document.drop_list2.SubCat2, "RAMGARH", "RAMGARH");
        addOption(document.drop_list2.SubCat2, "RANCHI", "RANCHI");
        addOption(document.drop_list2.SubCat2, "SAHEBGANJ", "SAHEBGANJ");
        addOption(document.drop_list2.SubCat2, "SARAIKELA KHARSAWAN", "SARAIKELA KHARSAWAN");
        addOption(document.drop_list2.SubCat2, "SIMDEGA", "SIMDEGA");
        addOption(document.drop_list2.SubCat2, "WEST SINGHBHUM", "WEST SINGHBHUM");
    }
    if (document.drop_list2.Category2.value == 'KARNATAKA') {
        addOption(document.drop_list2.SubCat2, "BAGALKOTE", "BAGALKOTE");
        addOption(document.drop_list2.SubCat2, "BALLARI", "BALLARI");
        addOption(document.drop_list2.SubCat2, "BELAGAVI", "BELAGAVI");
        addOption(document.drop_list2.SubCat2, "BENGALURU RURAL", "BENGALURU RURAL");
        addOption(document.drop_list2.SubCat2, "BENGALURU URBAN", "BENGALURU URBAN");
        addOption(document.drop_list2.SubCat2, "BIDAR", "BIDAR");
        addOption(document.drop_list2.SubCat2, "CHAMARAJANAGARA", "CHAMARAJANAGARA");
        addOption(document.drop_list2.SubCat2, "CHIKKABALLAPURA", "CHIKKABALLAPURA");
        addOption(document.drop_list2.SubCat2, "CHIKKAMAGALURU", "CHIKKAMAGALURU");
        addOption(document.drop_list2.SubCat2, "CHITRADURGA", "CHITRADURGA");
        addOption(document.drop_list2.SubCat2, "DAKSHINA KANNADA", "DAKSHINA KANNADA");
        addOption(document.drop_list2.SubCat2, "DAVANGERE", "DAVANGERE");
        addOption(document.drop_list2.SubCat2, "DHARWAD", "DHARWAD");
        addOption(document.drop_list2.SubCat2, "GADAG", "GADAG");
        addOption(document.drop_list2.SubCat2, "HASSAN", "HASSAN");
        addOption(document.drop_list2.SubCat2, "HAVERI", "HAVERI");
        addOption(document.drop_list2.SubCat2, "KALABURAGI", "KALABURAGI");
        addOption(document.drop_list2.SubCat2, "KODAGU", "KODAGU");
        addOption(document.drop_list2.SubCat2, "KOLAR", "KOLAR");
        addOption(document.drop_list2.SubCat2, "KOPPAL", "KOPPAL");
        addOption(document.drop_list2.SubCat2, "MANDYA", "MANDYA");
        addOption(document.drop_list2.SubCat2, "MYSURU", "MYSURU");
        addOption(document.drop_list2.SubCat2, "RAICHUR", "RAICHUR");
        addOption(document.drop_list2.SubCat2, "RAMANAGARA", "RAMANAGARA");
        addOption(document.drop_list2.SubCat2, "SHIVAMOGGA", "SHIVAMOGGA");
        addOption(document.drop_list2.SubCat2, "TUMAKURU", "TUMAKURU");
        addOption(document.drop_list2.SubCat2, "UDUPI", "UDUPI");
        addOption(document.drop_list2.SubCat2, "UTTARA KANNADA", "UTTARA KANNADA");
        addOption(document.drop_list2.SubCat2, "VIJAYAPURA", "VIJAYAPURA");
        addOption(document.drop_list2.SubCat2, "YADGIR", "YADGIR");
    }
    if (document.drop_list2.Category2.value == 'KERALA') {
        addOption(document.drop_list2.SubCat2, "ALAPPUZHA", "ALAPPUZHA");
        addOption(document.drop_list2.SubCat2, "ERNAKULAM", "ERNAKULAM");
        addOption(document.drop_list2.SubCat2, "IDUKKI", "IDUKKI");
        addOption(document.drop_list2.SubCat2, "KANNUR", "KANNUR");
        addOption(document.drop_list2.SubCat2, "KASARAGOD", "KASARAGOD");
        addOption(document.drop_list2.SubCat2, "KOLLAM", "KOLLAM");
        addOption(document.drop_list2.SubCat2, "KOTTAYAM", "KOTTAYAM");
        addOption(document.drop_list2.SubCat2, "KOZHIKODE", "KOZHIKODE");
        addOption(document.drop_list2.SubCat2, "MALAPPURAM", "MALAPPURAM");
        addOption(document.drop_list2.SubCat2, "PALAKKAD", "PALAKKAD");
        addOption(document.drop_list2.SubCat2, "PATHANAMTHITTA", "PATHANAMTHITTA");
        addOption(document.drop_list2.SubCat2, "THIRUVANANTHAPURAM", "THIRUVANANTHAPURAM");
        addOption(document.drop_list2.SubCat2, "THRISSUR", "THRISSUR");
        addOption(document.drop_list2.SubCat2, "WAYANAD", "WAYANAD");
    }
    if (document.drop_list2.Category2.value == 'LADAKH') {
        addOption(document.drop_list2.SubCat2, "KARGIL", "KARGIL");
        addOption(document.drop_list2.SubCat2, "LEH LADAKH", "LEH LADAKH");
    }
    if (document.drop_list2.Category2.value == 'LAKSHADWEEP') {
        addOption(document.drop_list2.SubCat2, "LAKSHADWEEP DISTRICT", "LAKSHADWEEP DISTRICT");
    }
    if (document.drop_list2.Category2.value == 'MADHYA PRADESH') {
        addOption(document.drop_list2.SubCat2, "AGAR MALWA", "AGAR MALWA");
        addOption(document.drop_list2.SubCat2, "ALIRAJPUR", "ALIRAJPUR");
        addOption(document.drop_list2.SubCat2, "ANUPPUR", "ANUPPUR");
        addOption(document.drop_list2.SubCat2, "ASHOKNAGAR", "ASHOKNAGAR");
        addOption(document.drop_list2.SubCat2, "BALAGHAT", "BALAGHAT");
        addOption(document.drop_list2.SubCat2, "BARWANI", "BARWANI");
        addOption(document.drop_list2.SubCat2, "BETUL", "BETUL");
        addOption(document.drop_list2.SubCat2, "BHIND", "BHIND");
        addOption(document.drop_list2.SubCat2, "BHOPAL", "BHOPAL");
        addOption(document.drop_list2.SubCat2, "BURHANPUR", "BURHANPUR");
        addOption(document.drop_list2.SubCat2, "CHHATARPUR", "CHHATARPUR");
        addOption(document.drop_list2.SubCat2, "CHHINDWARA", "CHHINDWARA");
        addOption(document.drop_list2.SubCat2, "DAMOH", "DAMOH");
        addOption(document.drop_list2.SubCat2, "DATIA", "DATIA");
        addOption(document.drop_list2.SubCat2, "DEWAS", "DEWAS");
        addOption(document.drop_list2.SubCat2, "DHAR", "DHAR");
        addOption(document.drop_list2.SubCat2, "DINDORI", "DINDORI");
        addOption(document.drop_list2.SubCat2, "EAST NIMAR", "EAST NIMAR");
        addOption(document.drop_list2.SubCat2, "GUNA", "GUNA");
        addOption(document.drop_list2.SubCat2, "GWALIOR", "GWALIOR");
        addOption(document.drop_list2.SubCat2, "HARDA", "HARDA");
        addOption(document.drop_list2.SubCat2, "HOSHANGABAD", "HOSHANGABAD");
        addOption(document.drop_list2.SubCat2, "INDORE", "INDORE");
        addOption(document.drop_list2.SubCat2, "JABALPUR", "JABALPUR");
        addOption(document.drop_list2.SubCat2, "JHABUA", "JHABUA");
        addOption(document.drop_list2.SubCat2, "KATNI", "KATNI");
        addOption(document.drop_list2.SubCat2, "KHARGONE", "KHARGONE");
        addOption(document.drop_list2.SubCat2, "MANDLA", "MANDLA");
        addOption(document.drop_list2.SubCat2, "MANDSAUR", "MANDSAUR");
        addOption(document.drop_list2.SubCat2, "MORENA", "MORENA");
        addOption(document.drop_list2.SubCat2, "NARSINGHPUR", "NARSINGHPUR");
        addOption(document.drop_list2.SubCat2, "NEEMUCH", "NEEMUCH");
        addOption(document.drop_list2.SubCat2, "Niwari", "Niwari");
        addOption(document.drop_list2.SubCat2, "PANNA", "PANNA");
        addOption(document.drop_list2.SubCat2, "RAISEN", "RAISEN");
        addOption(document.drop_list2.SubCat2, "RAJGARH", "RAJGARH");
        addOption(document.drop_list2.SubCat2, "RATLAM", "RATLAM");
        addOption(document.drop_list2.SubCat2, "REWA", "REWA");
        addOption(document.drop_list2.SubCat2, "SAGAR", "SAGAR");
        addOption(document.drop_list2.SubCat2, "SATNA", "SATNA");
        addOption(document.drop_list2.SubCat2, "SEHORE", "SEHORE");
        addOption(document.drop_list2.SubCat2, "SEONI", "SEONI");
        addOption(document.drop_list2.SubCat2, "SHAHDOL", "SHAHDOL");
        addOption(document.drop_list2.SubCat2, "SHAJAPUR", "SHAJAPUR");
        addOption(document.drop_list2.SubCat2, "SHEOPUR", "SHEOPUR");
        addOption(document.drop_list2.SubCat2, "SHIVPURI", "SHIVPURI");
        addOption(document.drop_list2.SubCat2, "SIDHI", "SIDHI");
        addOption(document.drop_list2.SubCat2, "SINGRAULI", "SINGRAULI");
        addOption(document.drop_list2.SubCat2, "TIKAMGARH", "TIKAMGARH");
        addOption(document.drop_list2.SubCat2, "UJJAIN", "UJJAIN");
        addOption(document.drop_list2.SubCat2, "UMARIA", "UMARIA");
        addOption(document.drop_list2.SubCat2, "VIDISHA", "VIDISHA");
    }
    if (document.drop_list2.Category2.value == 'MAHARASHTRA') {
        addOption(document.drop_list2.SubCat2, "AHMEDNAGAR", "AHMEDNAGAR");
        addOption(document.drop_list2.SubCat2, "AKOLA", "AKOLA");
        addOption(document.drop_list2.SubCat2, "AMRAVATI", "AMRAVATI");
        addOption(document.drop_list2.SubCat2, "AURANGABAD", "AURANGABAD");
        addOption(document.drop_list2.SubCat2, "BEED", "BEED");
        addOption(document.drop_list2.SubCat2, "BHANDARA", "BHANDARA");
        addOption(document.drop_list2.SubCat2, "BULDHANA", "BULDHANA");
        addOption(document.drop_list2.SubCat2, "CHANDRAPUR", "CHANDRAPUR");
        addOption(document.drop_list2.SubCat2, "DHULE", "DHULE");
        addOption(document.drop_list2.SubCat2, "GADCHIROLI", "GADCHIROLI");
        addOption(document.drop_list2.SubCat2, "GONDIA", "GONDIA");
        addOption(document.drop_list2.SubCat2, "HINGOLI", "HINGOLI");
        addOption(document.drop_list2.SubCat2, "JALGAON", "JALGAON");
        addOption(document.drop_list2.SubCat2, "JALNA", "JALNA");
        addOption(document.drop_list2.SubCat2, "KOLHAPUR", "KOLHAPUR");
        addOption(document.drop_list2.SubCat2, "LATUR", "LATUR");
        addOption(document.drop_list2.SubCat2, "MUMBAI", "MUMBAI");
        addOption(document.drop_list2.SubCat2, "MUMBAI SUBURBAN", "MUMBAI SUBURBAN");
        addOption(document.drop_list2.SubCat2, "NAGPUR", "NAGPUR");
        addOption(document.drop_list2.SubCat2, "NANDED", "NANDED");
        addOption(document.drop_list2.SubCat2, "NANDURBAR", "NANDURBAR");
        addOption(document.drop_list2.SubCat2, "NASHIK", "NASHIK");
        addOption(document.drop_list2.SubCat2, "OSMANABAD", "OSMANABAD");
        addOption(document.drop_list2.SubCat2, "PALGHAR", "PALGHAR");
        addOption(document.drop_list2.SubCat2, "PARBHANI", "PARBHANI");
        addOption(document.drop_list2.SubCat2, "PUNE", "PUNE");
        addOption(document.drop_list2.SubCat2, "RAIGAD", "RAIGAD");
        addOption(document.drop_list2.SubCat2, "RATNAGIRI", "RATNAGIRI");
        addOption(document.drop_list2.SubCat2, "SANGLI", "SANGLI");
        addOption(document.drop_list2.SubCat2, "SATARA", "SATARA");
        addOption(document.drop_list2.SubCat2, "SINDHUDURG", "SINDHUDURG");
        addOption(document.drop_list2.SubCat2, "SOLAPUR", "SOLAPUR");
        addOption(document.drop_list2.SubCat2, "THANE", "THANE");
        addOption(document.drop_list2.SubCat2, "WARDHA", "WARDHA");
        addOption(document.drop_list2.SubCat2, "WASHIM", "WASHIM");
        addOption(document.drop_list2.SubCat2, "YAVATMAL", "YAVATMAL");
    }
    if (document.drop_list2.Category2.value == 'MANIPUR') {
        addOption(document.drop_list2.SubCat2, "BISHNUPUR", "BISHNUPUR");
        addOption(document.drop_list2.SubCat2, "CHANDEL", "CHANDEL");
        addOption(document.drop_list2.SubCat2, "CHURACHANDPUR", "CHURACHANDPUR");
        addOption(document.drop_list2.SubCat2, "IMPHAL EAST", "IMPHAL EAST");
        addOption(document.drop_list2.SubCat2, "IMPHAL WEST", "IMPHAL WEST");
        addOption(document.drop_list2.SubCat2, "JIRIBAM", "JIRIBAM");
        addOption(document.drop_list2.SubCat2, "KAKCHING", "KAKCHING");
        addOption(document.drop_list2.SubCat2, "KAMJONG", "KAMJONG");
        addOption(document.drop_list2.SubCat2, "KANGPOKPI", "KANGPOKPI");
        addOption(document.drop_list2.SubCat2, "NONEY", "NONEY");
        addOption(document.drop_list2.SubCat2, "PHERZAWL", "PHERZAWL");
        addOption(document.drop_list2.SubCat2, "SENAPATI", "SENAPATI");
        addOption(document.drop_list2.SubCat2, "TAMENGLONG", "TAMENGLONG");
        addOption(document.drop_list2.SubCat2, "TENGNOUPAL", "TENGNOUPAL");
        addOption(document.drop_list2.SubCat2, "THOUBAL", "THOUBAL");
        addOption(document.drop_list2.SubCat2, "UKHRUL", "UKHRUL");
    }
    if (document.drop_list2.Category2.value == 'MEGHALAYA') {
        addOption(document.drop_list2.SubCat2, "EAST GARO HILLS", "EAST GARO HILLS");
        addOption(document.drop_list2.SubCat2, "EAST JAINTIA HILLS", "EAST JAINTIA HILLS");
        addOption(document.drop_list2.SubCat2, "EAST KHASI HILLS", "EAST KHASI HILLS");
        addOption(document.drop_list2.SubCat2, "NORTH GARO HILLS", "NORTH GARO HILLS");
        addOption(document.drop_list2.SubCat2, "RI BHOI", "RI BHOI");
        addOption(document.drop_list2.SubCat2, "SOUTH GARO HILLS", "SOUTH GARO HILLS");
        addOption(document.drop_list2.SubCat2, "SOUTH WEST GARO HILLS", "SOUTH WEST GARO HILLS");
        addOption(document.drop_list2.SubCat2, "SOUTH WEST KHASI HILLS", "SOUTH WEST KHASI HILLS");
        addOption(document.drop_list2.SubCat2, "WEST GARO HILLS", "WEST GARO HILLS");
        addOption(document.drop_list2.SubCat2, "WEST JAINTIA HILLS", "WEST JAINTIA HILLS");
        addOption(document.drop_list2.SubCat2, "WEST KHASI HILLS", "WEST KHASI HILLS");
    }
    if (document.drop_list2.Category2.value == 'MIZORAM') {
        addOption(document.drop_list2.SubCat2, "AIZAWL", "AIZAWL");
        addOption(document.drop_list2.SubCat2, "CHAMPHAI", "CHAMPHAI");
        addOption(document.drop_list2.SubCat2, "Hnahthial", "Hnahthial");
        addOption(document.drop_list2.SubCat2, "KHAWZAWL", "KHAWZAWL");
        addOption(document.drop_list2.SubCat2, "KOLASIB", "KOLASIB");
        addOption(document.drop_list2.SubCat2, "LAWNGTLAI", "LAWNGTLAI");
        addOption(document.drop_list2.SubCat2, "LUNGLEI", "LUNGLEI");
        addOption(document.drop_list2.SubCat2, "MAMIT", "MAMIT");
        addOption(document.drop_list2.SubCat2, "SAIHA", "SAIHA");
        addOption(document.drop_list2.SubCat2, "SAITUAL", "SAITUAL");
        addOption(document.drop_list2.SubCat2, "SERCHHIP", "SERCHHIP");
    }
    if (document.drop_list2.Category2.value == 'NAGALAND') {
        addOption(document.drop_list2.SubCat2, "DIMAPUR", "DIMAPUR");
        addOption(document.drop_list2.SubCat2, "KIPHIRE", "KIPHIRE");
        addOption(document.drop_list2.SubCat2, "KOHIMA", "KOHIMA");
        addOption(document.drop_list2.SubCat2, "LONGLENG", "LONGLENG");
        addOption(document.drop_list2.SubCat2, "MOKOKCHUNG", "MOKOKCHUNG");
        addOption(document.drop_list2.SubCat2, "MON", "MON");
        addOption(document.drop_list2.SubCat2, "Noklak", "Noklak");
        addOption(document.drop_list2.SubCat2, "PEREN", "PEREN");
        addOption(document.drop_list2.SubCat2, "PHEK", "PHEK");
        addOption(document.drop_list2.SubCat2, "TUENSANG", "TUENSANG");
        addOption(document.drop_list2.SubCat2, "WOKHA", "WOKHA");
        addOption(document.drop_list2.SubCat2, "ZUNHEBOTO", "ZUNHEBOTO");
    }
    if (document.drop_list2.Category2.value == 'ODISHA') {
        addOption(document.drop_list2.SubCat2, "ANUGUL", "ANUGUL");
        addOption(document.drop_list2.SubCat2, "BALANGIR", "BALANGIR");
        addOption(document.drop_list2.SubCat2, "BALESHWAR", "BALESHWAR");
        addOption(document.drop_list2.SubCat2, "BARGARH", "BARGARH");
        addOption(document.drop_list2.SubCat2, "BHADRAK", "BHADRAK");
        addOption(document.drop_list2.SubCat2, "BOUDH", "BOUDH");
        addOption(document.drop_list2.SubCat2, "CUTTACK", "CUTTACK");
        addOption(document.drop_list2.SubCat2, "DEOGARH", "DEOGARH");
        addOption(document.drop_list2.SubCat2, "DHENKANAL", "DHENKANAL");
        addOption(document.drop_list2.SubCat2, "GAJAPATI", "GAJAPATI");
        addOption(document.drop_list2.SubCat2, "GANJAM", "GANJAM");
        addOption(document.drop_list2.SubCat2, "JAGATSINGHAPUR", "JAGATSINGHAPUR");
        addOption(document.drop_list2.SubCat2, "JAJAPUR", "JAJAPUR");
        addOption(document.drop_list2.SubCat2, "JHARSUGUDA", "JHARSUGUDA");
        addOption(document.drop_list2.SubCat2, "KALAHANDI", "KALAHANDI");
        addOption(document.drop_list2.SubCat2, "KANDHAMAL", "KANDHAMAL");
        addOption(document.drop_list2.SubCat2, "KENDRAPARA", "KENDRAPARA");
        addOption(document.drop_list2.SubCat2, "KENDUJHAR", "KENDUJHAR");
        addOption(document.drop_list2.SubCat2, "KHORDHA", "KHORDHA");
        addOption(document.drop_list2.SubCat2, "KORAPUT", "KORAPUT");
        addOption(document.drop_list2.SubCat2, "MALKANGIRI", "MALKANGIRI");
        addOption(document.drop_list2.SubCat2, "MAYURBHANJ", "MAYURBHANJ");
        addOption(document.drop_list2.SubCat2, "NABARANGPUR", "NABARANGPUR");
        addOption(document.drop_list2.SubCat2, "NAYAGARH", "NAYAGARH");
        addOption(document.drop_list2.SubCat2, "NUAPADA", "NUAPADA");
        addOption(document.drop_list2.SubCat2, "PURI", "PURI");
        addOption(document.drop_list2.SubCat2, "RAYAGADA", "RAYAGADA");
        addOption(document.drop_list2.SubCat2, "SAMBALPUR", "SAMBALPUR");
        addOption(document.drop_list2.SubCat2, "SONEPUR", "SONEPUR");
        addOption(document.drop_list2.SubCat2, "SUNDARGARH", "SUNDARGARH");
    }
    if (document.drop_list2.Category2.value == 'PUDUCHERRY') {
        addOption(document.drop_list2.SubCat2, "KARAIKAL", "KARAIKAL");
        addOption(document.drop_list2.SubCat2, "MAHE", "MAHE");
        addOption(document.drop_list2.SubCat2, "PONDICHERRY", "PONDICHERRY");
        addOption(document.drop_list2.SubCat2, "YANAM", "YANAM");
    }
    if (document.drop_list2.Category2.value == 'PUNJAB') {
        addOption(document.drop_list2.SubCat2, "AMRITSAR", "AMRITSAR");
        addOption(document.drop_list2.SubCat2, "BARNALA", "BARNALA");
        addOption(document.drop_list2.SubCat2, "BATHINDA", "BATHINDA");
        addOption(document.drop_list2.SubCat2, "FARIDKOT", "FARIDKOT");
        addOption(document.drop_list2.SubCat2, "FATEHGARH SAHIB", "FATEHGARH SAHIB");
        addOption(document.drop_list2.SubCat2, "FAZILKA", "FAZILKA");
        addOption(document.drop_list2.SubCat2, "FIROZEPUR", "FIROZEPUR");
        addOption(document.drop_list2.SubCat2, "GURDASPUR", "GURDASPUR");
        addOption(document.drop_list2.SubCat2, "HOSHIARPUR", "HOSHIARPUR");
        addOption(document.drop_list2.SubCat2, "JALANDHAR", "JALANDHAR");
        addOption(document.drop_list2.SubCat2, "KAPURTHALA", "KAPURTHALA");
        addOption(document.drop_list2.SubCat2, "LUDHIANA", "LUDHIANA");
        addOption(document.drop_list2.SubCat2, "MANSA", "MANSA");
        addOption(document.drop_list2.SubCat2, "MOGA", "MOGA");
        addOption(document.drop_list2.SubCat2, "PATHANKOT", "PATHANKOT");
        addOption(document.drop_list2.SubCat2, "PATIALA", "PATIALA");
        addOption(document.drop_list2.SubCat2, "RUPNAGAR", "RUPNAGAR");
        addOption(document.drop_list2.SubCat2, "SANGRUR", "SANGRUR");
        addOption(document.drop_list2.SubCat2, "S.A.S Nagar", "S.A.S Nagar");
        addOption(document.drop_list2.SubCat2, "Shahid Bhagat Singh Nagar", "Shahid Bhagat Singh Nagar");
        addOption(document.drop_list2.SubCat2, "SRI MUKTSAR SAHIB", "SRI MUKTSAR SAHIB");
        addOption(document.drop_list2.SubCat2, "Tarn Taran", "Tarn Taran");
    }
    if (document.drop_list2.Category2.value == 'RAJASTHAN') {
        addOption(document.drop_list2.SubCat2, "AJMER", "AJMER");
        addOption(document.drop_list2.SubCat2, "ALWAR", "ALWAR");
        addOption(document.drop_list2.SubCat2, "BANSWARA", "BANSWARA");
        addOption(document.drop_list2.SubCat2, "BARAN", "BARAN");
        addOption(document.drop_list2.SubCat2, "BARMER", "BARMER");
        addOption(document.drop_list2.SubCat2, "BHARATPUR", "BHARATPUR");
        addOption(document.drop_list2.SubCat2, "BHILWARA", "BHILWARA");
        addOption(document.drop_list2.SubCat2, "BIKANER", "BIKANER");
        addOption(document.drop_list2.SubCat2, "BUNDI", "BUNDI");
        addOption(document.drop_list2.SubCat2, "CHITTORGARH", "CHITTORGARH");
        addOption(document.drop_list2.SubCat2, "CHURU", "CHURU");
        addOption(document.drop_list2.SubCat2, "DAUSA", "DAUSA");
        addOption(document.drop_list2.SubCat2, "DHOLPUR", "DHOLPUR");
        addOption(document.drop_list2.SubCat2, "DUNGARPUR", "DUNGARPUR");
        addOption(document.drop_list2.SubCat2, "GANGANAGAR", "GANGANAGAR");
        addOption(document.drop_list2.SubCat2, "HANUMANGARH", "HANUMANGARH");
        addOption(document.drop_list2.SubCat2, "JAIPUR", "JAIPUR");
        addOption(document.drop_list2.SubCat2, "JAISALMER", "JAISALMER");
        addOption(document.drop_list2.SubCat2, "JALORE", "JALORE");
        addOption(document.drop_list2.SubCat2, "JHALAWAR", "JHALAWAR");
        addOption(document.drop_list2.SubCat2, "JHUNJHUNU", "JHUNJHUNU");
        addOption(document.drop_list2.SubCat2, "JODHPUR", "JODHPUR");
        addOption(document.drop_list2.SubCat2, "KARAULI", "KARAULI");
        addOption(document.drop_list2.SubCat2, "KOTA", "KOTA");
        addOption(document.drop_list2.SubCat2, "NAGAUR", "NAGAUR");
        addOption(document.drop_list2.SubCat2, "PALI", "PALI");
        addOption(document.drop_list2.SubCat2, "PRATAPGARH", "PRATAPGARH");
        addOption(document.drop_list2.SubCat2, "RAJSAMAND", "RAJSAMAND");
        addOption(document.drop_list2.SubCat2, "SAWAI MADHOPUR", "SAWAI MADHOPUR");
        addOption(document.drop_list2.SubCat2, "SIKAR", "SIKAR");
        addOption(document.drop_list2.SubCat2, "SIROHI", "SIROHI");
        addOption(document.drop_list2.SubCat2, "TONK", "TONK");
        addOption(document.drop_list2.SubCat2, "UDAIPUR", "UDAIPUR");
    }
    if (document.drop_list2.Category2.value == 'SIKKIM') {
        addOption(document.drop_list2.SubCat2, "EAST DISTRICT", "EAST DISTRICT");
        addOption(document.drop_list2.SubCat2, "NORTH DISTRICT", "NORTH DISTRICT");
        addOption(document.drop_list2.SubCat2, "SOUTH DISTRICT", "SOUTH DISTRICT");
        addOption(document.drop_list2.SubCat2, "WEST DISTRICT", "WEST DISTRICT");
    }
    if (document.drop_list2.Category2.value == 'TAMIL NADU') {
        addOption(document.drop_list2.SubCat2, "Ariyalur", "Ariyalur");
        addOption(document.drop_list2.SubCat2, "CHENGALPATTU", "CHENGALPATTU");
        addOption(document.drop_list2.SubCat2, "CHENNAI", "CHENNAI");
        addOption(document.drop_list2.SubCat2, "COIMBATORE", "COIMBATORE");
        addOption(document.drop_list2.SubCat2, "CUDDALORE", "CUDDALORE");
        addOption(document.drop_list2.SubCat2, "DHARMAPURI", "DHARMAPURI");
        addOption(document.drop_list2.SubCat2, "DINDIGUL", "DINDIGUL");
        addOption(document.drop_list2.SubCat2, "ERODE", "ERODE");
        addOption(document.drop_list2.SubCat2, "KALLAKURICHI", "KALLAKURICHI");
        addOption(document.drop_list2.SubCat2, "KANCHIPURAM", "KANCHIPURAM");
        addOption(document.drop_list2.SubCat2, "KANNIYAKUMARI", "KANNIYAKUMARI");
        addOption(document.drop_list2.SubCat2, "KARUR", "KARUR");
        addOption(document.drop_list2.SubCat2, "KRISHNAGIRI", "KRISHNAGIRI");
        addOption(document.drop_list2.SubCat2, "MADURAI", "MADURAI");
        addOption(document.drop_list2.SubCat2, "Mayiladuthurai", "Mayiladuthurai");
        addOption(document.drop_list2.SubCat2, "NAGAPATTINAM", "NAGAPATTINAM");
        addOption(document.drop_list2.SubCat2, "NAMAKKAL", "NAMAKKAL");
        addOption(document.drop_list2.SubCat2, "PERAMBALUR", "PERAMBALUR");
        addOption(document.drop_list2.SubCat2, "PUDUKKOTTAI", "PUDUKKOTTAI");
        addOption(document.drop_list2.SubCat2, "RAMANATHAPURAM", "RAMANATHAPURAM");
        addOption(document.drop_list2.SubCat2, "Ranipet", "Ranipet");
        addOption(document.drop_list2.SubCat2, "SALEM", "SALEM");
        addOption(document.drop_list2.SubCat2, "SIVAGANGA", "SIVAGANGA");
        addOption(document.drop_list2.SubCat2, "TENKASI", "TENKASI");
        addOption(document.drop_list2.SubCat2, "THANJAVUR", "THANJAVUR");
        addOption(document.drop_list2.SubCat2, "THENI", "THENI");
        addOption(document.drop_list2.SubCat2, "THE NILGIRIS", "THE NILGIRIS");
        addOption(document.drop_list2.SubCat2, "THIRUVALLUR", "THIRUVALLUR");
        addOption(document.drop_list2.SubCat2, "THIRUVARUR", "THIRUVARUR");
        addOption(document.drop_list2.SubCat2, "TIRUCHIRAPPALLI", "TIRUCHIRAPPALLI");
        addOption(document.drop_list2.SubCat2, "TIRUNELVELI", "TIRUNELVELI");
        addOption(document.drop_list2.SubCat2, "Tirupathur", "Tirupathur");
        addOption(document.drop_list2.SubCat2, "TIRUPPUR", "TIRUPPUR");
        addOption(document.drop_list2.SubCat2, "TIRUVANNAMALAI", "TIRUVANNAMALAI");
        addOption(document.drop_list2.SubCat2, "TUTICORIN", "TUTICORIN");
        addOption(document.drop_list2.SubCat2, "VELLORE", "VELLORE");
        addOption(document.drop_list2.SubCat2, "VILLUPURAM", "VILLUPURAM");
        addOption(document.drop_list2.SubCat2, "VIRUDHUNAGAR", "VIRUDHUNAGAR");
    }
    if (document.drop_list2.Category2.value == 'TELANGANA') {
        addOption(document.drop_list2.SubCat2, "ADILABAD", "ADILABAD");
        addOption(document.drop_list2.SubCat2, "BHADRADRI KOTHAGUDEM", "BHADRADRI KOTHAGUDEM");
        addOption(document.drop_list2.SubCat2, "HYDERABAD", "HYDERABAD");
        addOption(document.drop_list2.SubCat2, "Jagitial", "Jagitial");
        addOption(document.drop_list2.SubCat2, "JANGOAN", "JANGOAN");
        addOption(document.drop_list2.SubCat2, "JAYASHANKAR BHUPALAPALLY", "JAYASHANKAR BHUPALAPALLY");
        addOption(document.drop_list2.SubCat2, "JOGULAMBA GADWAL", "JOGULAMBA GADWAL");
        addOption(document.drop_list2.SubCat2, "KAMAREDDY", "KAMAREDDY");
        addOption(document.drop_list2.SubCat2, "KARIMNAGAR", "KARIMNAGAR");
        addOption(document.drop_list2.SubCat2, "KHAMMAM", "KHAMMAM");
        addOption(document.drop_list2.SubCat2, "KUMURAM BHEEM ASIFABAD", "KUMURAM BHEEM ASIFABAD");
        addOption(document.drop_list2.SubCat2, "MAHABUBABAD", "MAHABUBABAD");
        addOption(document.drop_list2.SubCat2, "MAHABUBNAGAR", "MAHABUBNAGAR");
        addOption(document.drop_list2.SubCat2, "MANCHERIAL", "MANCHERIAL");
        addOption(document.drop_list2.SubCat2, "MEDAK", "MEDAK");
        addOption(document.drop_list2.SubCat2, "MEDCHAL MALKAJGIRI", "MEDCHAL MALKAJGIRI");
        addOption(document.drop_list2.SubCat2, "Mulugu", "Mulugu");
        addOption(document.drop_list2.SubCat2, "NAGARKURNOOL", "NAGARKURNOOL");
        addOption(document.drop_list2.SubCat2, "NALGONDA", "NALGONDA");
        addOption(document.drop_list2.SubCat2, "Narayanpet", "Narayanpet");
        addOption(document.drop_list2.SubCat2, "Nirmal", "Nirmal");
        addOption(document.drop_list2.SubCat2, "NIZAMABAD", "NIZAMABAD");
        addOption(document.drop_list2.SubCat2, "PEDDAPALLI", "PEDDAPALLI");
        addOption(document.drop_list2.SubCat2, "RAJANNA SIRCILLA", "RAJANNA SIRCILLA");
        addOption(document.drop_list2.SubCat2, "RANGA REDDY", "RANGA REDDY");
        addOption(document.drop_list2.SubCat2, "SANGAREDDY", "SANGAREDDY");
        addOption(document.drop_list2.SubCat2, "SIDDIPET", "SIDDIPET");
        addOption(document.drop_list2.SubCat2, "SURYAPET", "SURYAPET");
        addOption(document.drop_list2.SubCat2, "VIKARABAD", "VIKARABAD");
        addOption(document.drop_list2.SubCat2, "WANAPARTHY", "WANAPARTHY");
        addOption(document.drop_list2.SubCat2, "WARANGAL RURAL", "WARANGAL RURAL");
        addOption(document.drop_list2.SubCat2, "WARANGAL URBAN", "WARANGAL URBAN");
        addOption(document.drop_list2.SubCat2, "YADADRI BHUVANAGIRI", "YADADRI BHUVANAGIRI");
    }
    if (document.drop_list2.Category2.value == 'THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU') {
        addOption(document.drop_list2.SubCat2, "DADRA AND NAGAR HAVELI", "DADRA AND NAGAR HAVELI");
        addOption(document.drop_list2.SubCat2, "DAMAN", "DAMAN");
        addOption(document.drop_list2.SubCat2, "DIU", "DIU");
    }
    if (document.drop_list2.Category2.value == 'TRIPURA') {
        addOption(document.drop_list2.SubCat2, "Dhalai", "Dhalai");
        addOption(document.drop_list2.SubCat2, "Gomati", "Gomati");
        addOption(document.drop_list2.SubCat2, "Khowai", "Khowai");
        addOption(document.drop_list2.SubCat2, "North Tripura", "North Tripura");
        addOption(document.drop_list2.SubCat2, "Sepahijala", "Sepahijala");
        addOption(document.drop_list2.SubCat2, "South Tripura", "South Tripura");
        addOption(document.drop_list2.SubCat2, "Unakoti", "Unakoti");
        addOption(document.drop_list2.SubCat2, "West Tripura", "West Tripura");
    }
    if (document.drop_list2.Category2.value == 'UTTARAKHAND') {
        addOption(document.drop_list2.SubCat2, "ALMORA", "ALMORA");
        addOption(document.drop_list2.SubCat2, "BAGESHWAR", "BAGESHWAR");
        addOption(document.drop_list2.SubCat2, "CHAMOLI", "CHAMOLI");
        addOption(document.drop_list2.SubCat2, "CHAMPAWAT", "CHAMPAWAT");
        addOption(document.drop_list2.SubCat2, "DEHRADUN", "DEHRADUN");
        addOption(document.drop_list2.SubCat2, "HARIDWAR", "HARIDWAR");
        addOption(document.drop_list2.SubCat2, "NAINITAL", "NAINITAL");
        addOption(document.drop_list2.SubCat2, "PAURI GARHWAL", "PAURI GARHWAL");
        addOption(document.drop_list2.SubCat2, "PITHORAGARH", "PITHORAGARH");
        addOption(document.drop_list2.SubCat2, "RUDRA PRAYAG", "RUDRA PRAYAG");
        addOption(document.drop_list2.SubCat2, "TEHRI GARHWAL", "TEHRI GARHWAL");
        addOption(document.drop_list2.SubCat2, "UDAM SINGH NAGAR", "UDAM SINGH NAGAR");
        addOption(document.drop_list2.SubCat2, "UTTAR KASHI", "UTTAR KASHI");
    }
    if (document.drop_list2.Category2.value == 'UTTAR PRADESH') {
        addOption(document.drop_list2.SubCat2, "AGRA", "AGRA");
        addOption(document.drop_list2.SubCat2, "ALIGARH", "ALIGARH");
        addOption(document.drop_list2.SubCat2, "AMBEDKAR NAGAR", "AMBEDKAR NAGAR");
        addOption(document.drop_list2.SubCat2, "Amethi", "Amethi");
        addOption(document.drop_list2.SubCat2, "AMROHA", "AMROHA");
        addOption(document.drop_list2.SubCat2, "AURAIYA", "AURAIYA");
        addOption(document.drop_list2.SubCat2, "AYODHYA", "AYODHYA");
        addOption(document.drop_list2.SubCat2, "AZAMGARH", "AZAMGARH");
        addOption(document.drop_list2.SubCat2, "BAGHPAT", "BAGHPAT");
        addOption(document.drop_list2.SubCat2, "BAHRAICH", "BAHRAICH");
        addOption(document.drop_list2.SubCat2, "BALLIA", "BALLIA");
        addOption(document.drop_list2.SubCat2, "BALRAMPUR", "BALRAMPUR");
        addOption(document.drop_list2.SubCat2, "BANDA", "BANDA");
        addOption(document.drop_list2.SubCat2, "BARABANKI", "BARABANKI");
        addOption(document.drop_list2.SubCat2, "BAREILLY", "BAREILLY");
        addOption(document.drop_list2.SubCat2, "BASTI", "BASTI");
        addOption(document.drop_list2.SubCat2, "BHADOHI", "BHADOHI");
        addOption(document.drop_list2.SubCat2, "BIJNOR", "BIJNOR");
        addOption(document.drop_list2.SubCat2, "BUDAUN", "BUDAUN");
        addOption(document.drop_list2.SubCat2, "BULANDSHAHR", "BULANDSHAHR");
        addOption(document.drop_list2.SubCat2, "CHANDAULI", "CHANDAULI");
        addOption(document.drop_list2.SubCat2, "CHITRAKOOT", "CHITRAKOOT");
        addOption(document.drop_list2.SubCat2, "DEORIA", "DEORIA");
        addOption(document.drop_list2.SubCat2, "ETAH", "ETAH");
        addOption(document.drop_list2.SubCat2, "ETAWAH", "ETAWAH");
        addOption(document.drop_list2.SubCat2, "FARRUKHABAD", "FARRUKHABAD");
        addOption(document.drop_list2.SubCat2, "FATEHPUR", "FATEHPUR");
        addOption(document.drop_list2.SubCat2, "FIROZABAD", "FIROZABAD");
        addOption(document.drop_list2.SubCat2, "GAUTAM BUDDHA NAGAR", "GAUTAM BUDDHA NAGAR");
        addOption(document.drop_list2.SubCat2, "GHAZIABAD", "GHAZIABAD");
        addOption(document.drop_list2.SubCat2, "GHAZIPUR", "GHAZIPUR");
        addOption(document.drop_list2.SubCat2, "GONDA", "GONDA");
        addOption(document.drop_list2.SubCat2, "GORAKHPUR", "GORAKHPUR");
        addOption(document.drop_list2.SubCat2, "HAMIRPUR", "HAMIRPUR");
        addOption(document.drop_list2.SubCat2, "HAPUR", "HAPUR");
        addOption(document.drop_list2.SubCat2, "HARDOI", "HARDOI");
        addOption(document.drop_list2.SubCat2, "HATHRAS", "HATHRAS");
        addOption(document.drop_list2.SubCat2, "JALAUN", "JALAUN");
        addOption(document.drop_list2.SubCat2, "JAUNPUR", "JAUNPUR");
        addOption(document.drop_list2.SubCat2, "JHANSI", "JHANSI");
        addOption(document.drop_list2.SubCat2, "KANNAUJ", "KANNAUJ");
        addOption(document.drop_list2.SubCat2, "KANPUR DEHAT", "KANPUR DEHAT");
        addOption(document.drop_list2.SubCat2, "KANPUR NAGAR", "KANPUR NAGAR");
        addOption(document.drop_list2.SubCat2, "Kasganj", "Kasganj");
        addOption(document.drop_list2.SubCat2, "KAUSHAMBI", "KAUSHAMBI");
        addOption(document.drop_list2.SubCat2, "KHERI", "KHERI");
        addOption(document.drop_list2.SubCat2, "KUSHI NAGAR", "KUSHI NAGAR");
        addOption(document.drop_list2.SubCat2, "LALITPUR", "LALITPUR");
        addOption(document.drop_list2.SubCat2, "LUCKNOW", "LUCKNOW");
        addOption(document.drop_list2.SubCat2, "MAHARAJGANJ", "MAHARAJGANJ");
        addOption(document.drop_list2.SubCat2, "MAHOBA", "MAHOBA");
        addOption(document.drop_list2.SubCat2, "MAINPURI", "MAINPURI");
        addOption(document.drop_list2.SubCat2, "MATHURA", "MATHURA");
        addOption(document.drop_list2.SubCat2, "MAU", "MAU");
        addOption(document.drop_list2.SubCat2, "MEERUT", "MEERUT");
        addOption(document.drop_list2.SubCat2, "MIRZAPUR", "MIRZAPUR");
        addOption(document.drop_list2.SubCat2, "MORADABAD", "MORADABAD");
        addOption(document.drop_list2.SubCat2, "MUZAFFARNAGAR", "MUZAFFARNAGAR");
        addOption(document.drop_list2.SubCat2, "PILIBHIT", "PILIBHIT");
        addOption(document.drop_list2.SubCat2, "PRATAPGARH", "PRATAPGARH");
        addOption(document.drop_list2.SubCat2, "PRAYAGRAJ", "PRAYAGRAJ");
        addOption(document.drop_list2.SubCat2, "RAE BARELI", "RAE BARELI");
        addOption(document.drop_list2.SubCat2, "RAMPUR", "RAMPUR");
        addOption(document.drop_list2.SubCat2, "SAHARANPUR", "SAHARANPUR");
        addOption(document.drop_list2.SubCat2, "SAMBHAL", "SAMBHAL");
        addOption(document.drop_list2.SubCat2, "SANT KABEER NAGAR", "SANT KABEER NAGAR");
        addOption(document.drop_list2.SubCat2, "SHAHJAHANPUR", "SHAHJAHANPUR");
        addOption(document.drop_list2.SubCat2, "SHAMLI", "SHAMLI");
        addOption(document.drop_list2.SubCat2, "SHRAVASTI", "SHRAVASTI");
        addOption(document.drop_list2.SubCat2, "SIDDHARTH NAGAR", "SIDDHARTH NAGAR");
        addOption(document.drop_list2.SubCat2, "SITAPUR", "SITAPUR");
        addOption(document.drop_list2.SubCat2, "SONBHADRA", "SONBHADRA");
        addOption(document.drop_list2.SubCat2, "SULTANPUR", "SULTANPUR");
        addOption(document.drop_list2.SubCat2, "UNNAO", "UNNAO");
        addOption(document.drop_list2.SubCat2, "VARANASI", "VARANASI");
    }
    if (document.drop_list2.Category2.value == 'WEST BENGAL') {
        addOption(document.drop_list2.SubCat2, "24 PARAGANAS NORTH", "24 PARAGANAS NORTH");
        addOption(document.drop_list2.SubCat2, "24 PARAGANAS SOUTH", "24 PARAGANAS SOUTH");
        addOption(document.drop_list2.SubCat2, "Alipurduar", "Alipurduar");
        addOption(document.drop_list2.SubCat2, "BANKURA", "BANKURA");
        addOption(document.drop_list2.SubCat2, "BIRBHUM", "BIRBHUM");
        addOption(document.drop_list2.SubCat2, "COOCHBEHAR", "COOCHBEHAR");
        addOption(document.drop_list2.SubCat2, "DARJEELING", "DARJEELING");
        addOption(document.drop_list2.SubCat2, "DINAJPUR DAKSHIN", "DINAJPUR DAKSHIN");
        addOption(document.drop_list2.SubCat2, "DINAJPUR UTTAR", "DINAJPUR UTTAR");
        addOption(document.drop_list2.SubCat2, "HOOGHLY", "HOOGHLY");
        addOption(document.drop_list2.SubCat2, "HOWRAH", "HOWRAH");
        addOption(document.drop_list2.SubCat2, "JALPAIGURI", "JALPAIGURI");
        addOption(document.drop_list2.SubCat2, "Jhargram", "Jhargram");
        addOption(document.drop_list2.SubCat2, "KALIMPONG", "KALIMPONG");
        addOption(document.drop_list2.SubCat2, "KOLKATA", "KOLKATA");
        addOption(document.drop_list2.SubCat2, "MALDAH", "MALDAH");
        addOption(document.drop_list2.SubCat2, "MEDINIPUR EAST", "MEDINIPUR EAST");
        addOption(document.drop_list2.SubCat2, "MEDINIPUR WEST", "MEDINIPUR WEST");
        addOption(document.drop_list2.SubCat2, "MURSHIDABAD", "MURSHIDABAD");
        addOption(document.drop_list2.SubCat2, "NADIA", "NADIA");
        addOption(document.drop_list2.SubCat2, "PASCHIM BARDHAMAN", "PASCHIM BARDHAMAN");
        addOption(document.drop_list2.SubCat2, "PURBA BARDHAMAN", "PURBA BARDHAMAN");
        addOption(document.drop_list2.SubCat2, "PURULIA", "PURULIA");
    }
    // if (document.drop_list2.Category2.value == 'Fruits') {
    //     addOption(document.drop_list2.SubCat2, "Mango", "Mango");
    //     addOption(document.drop_list2.SubCat2, "Banana", "Banana");
    //     addOption(document.drop_list2.SubCat2, "Orange", "Orange");
    // }
    // if (document.drop_list2.Category2.value == 'Games') {
    //     addOption(document.drop_list2.SubCat2, "Cricket", "Cricket");
    //     addOption(document.drop_list2.SubCat2, "Football", "Football");
    //     addOption(document.drop_list2.SubCat2, "Polo", "Polo", "");
    // }
    // if (document.drop_list2.Category2.value == 'Scripts') {
    //     addOption(document.drop_list2.SubCat2, "PHP", "PHP");
    //     addOption(document.drop_list2.SubCat2, "ASP", "ASP");
    //     addOption(document.drop_list2.SubCat2, "Perl", "Perl");
    // }

}

function SelectSubSubCat2() {
    // ON selection of Category2 this function will work

    // removeAllOptions(document.drop_list2.SubSubCat2);
    addOption(document.drop_list2.SubSubCat2, "", "SubSubCat2", "");

    // if (document.drop_list2.Category2.value == 'Fruits') {
    //     addOption(document.drop_list2.SubSubCat2, "Mango1", "Mango1");
    //     addOption(document.drop_list2.SubSubCat2, "Banana1", "Banana1");
    //     addOption(document.drop_list2.SubSubCat2, "Orange1", "Orange1");
    // }
    // if (document.drop_list2.Category2.value == 'Games') {
    //     addOption(document.drop_list2.SubSubCat2, "Cricket1", "Cricket1");
    //     addOption(document.drop_list2.SubSubCat2, "Football1", "Football1");
    //     addOption(document.drop_list2.SubSubCat2, "Polo1", "Polo1", "");
    // }
    // if (document.drop_list2.Category2.value == 'Scripts') {
    //     addOption(document.drop_list2.SubSubCat2, "PHP1", "PHP1");
    //     addOption(document.drop_list2.SubSubCat2, "ASP1", "ASP1");
    //     addOption(document.drop_list2.SubSubCat2, "Perl1", "Perl1");
    // }
    if (document.drop_list2.Category2.value == 'PURBA BARDHAMAN') {
        addOption(document.drop_list2.SubSubCat2, "Bahir Sarbamangala", "Bahir Sarbamangala");
        addOption(document.drop_list2.SubSubCat2, "Bardhaman", "Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Bud Bud", "Bud Bud");
        addOption(document.drop_list2.SubSubCat2, "Dainhat", "Dainhat");
        addOption(document.drop_list2.SubSubCat2, "Dhatrigram", "Dhatrigram");
        addOption(document.drop_list2.SubSubCat2, "Gangpur", "Gangpur");
        addOption(document.drop_list2.SubSubCat2, "Goda, Purba Bardhaman", "Goda, Purba Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Gopinathpur, West Bengal", "Gopinathpur, West Bengal");
        addOption(document.drop_list2.SubSubCat2, "Guskara", "Guskara");
        addOption(document.drop_list2.SubSubCat2, "Hatsimla", "Hatsimla");
        addOption(document.drop_list2.SubSubCat2, "Jaluidanga", "Jaluidanga");
        addOption(document.drop_list2.SubSubCat2, "Kalna City", "Kalna City");
        addOption(document.drop_list2.SubSubCat2, "Katwa", "Katwa");
        addOption(document.drop_list2.SubSubCat2, "Memari", "Memari");
        addOption(document.drop_list2.SubSubCat2, "Mirzapur, Bardhaman", "Mirzapur, Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Nari, Purba Bardhaman", "Nari, Purba Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Nasratpur", "Nasratpur");
        addOption(document.drop_list2.SubSubCat2, "Palsit", "Palsit");
        addOption(document.drop_list2.SubSubCat2, "Panuhat", "Panuhat");
        addOption(document.drop_list2.SubSubCat2, "Piarinagar", "Piarinagar");
        addOption(document.drop_list2.SubSubCat2, "Raipur, Purba Bardhaman", "Raipur, Purba Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Saktigarh, Bardhaman", "Saktigarh, Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Seharabazar", "Seharabazar");
        addOption(document.drop_list2.SubSubCat2, "Shashpur", "Shashpur");
        addOption(document.drop_list2.SubSubCat2, "Sribati", "Sribati");
        addOption(document.drop_list2.SubSubCat2, "Srirampur, Burdwan", "Srirampur, Burdwan");
        addOption(document.drop_list2.SubSubCat2, "Sukdal", "Sukdal");
        addOption(document.drop_list2.SubSubCat2, "Uttar Goara", "Uttar Goara");
    }
    if (document.drop_list2.Category2.value == 'PURULIA') {
        addOption(document.drop_list2.SubSubCat2, "Adra", "Adra");
        addOption(document.drop_list2.SubSubCat2, "Arra", "Arra");
        addOption(document.drop_list2.SubSubCat2, "Balarampur", "Balarampur");
        addOption(document.drop_list2.SubSubCat2, "Barabazar", "Barabazar");
        addOption(document.drop_list2.SubSubCat2, "Chapari", "Chapari");
        addOption(document.drop_list2.SubSubCat2, "Hijuli", "Hijuli");
        addOption(document.drop_list2.SubSubCat2, "Jhalda", "Jhalda");
        addOption(document.drop_list2.SubSubCat2, "Nabagram", "Nabagram");
        addOption(document.drop_list2.SubSubCat2, "Par Beliya", "Par Beliya");
        addOption(document.drop_list2.SubSubCat2, "Purulia", "Purulia");
        addOption(document.drop_list2.SubSubCat2, "Raghunathpur", "Raghunathpur");
        addOption(document.drop_list2.SubSubCat2, "S.T. Power Project Town", "S.T. Power Project Town");
    }

}
////////////////// 

function SelectSubSubSubCat2() {
    // ON selection of Category2 this function will work

    removeAllOptions(document.drop_list2.SubSubSubCat2);
    addOption(document.drop_list2.SubSubSubCat2, "", "Select City", "");

    // if (document.drop_list2.Category2.value == 'Fruits') {
    //     addOption(document.drop_list2.SubSubCat2, "Mango1", "Mango1");
    //     addOption(document.drop_list2.SubSubCat2, "Banana1", "Banana1");
    //     addOption(document.drop_list2.SubSubCat2, "Orange1", "Orange1");
    // }
    // if (document.drop_list2.Category2.value == 'Games') {
    //     addOption(document.drop_list2.SubSubCat2, "Cricket1", "Cricket1");
    //     addOption(document.drop_list2.SubSubCat2, "Football1", "Football1");
    //     addOption(document.drop_list2.SubSubCat2, "Polo1", "Polo1", "");
    // }
    // if (document.drop_list2.Category2.value == 'Scripts') {
    //     addOption(document.drop_list2.SubSubCat2, "PHP1", "PHP1");
    //     addOption(document.drop_list2.SubSubCat2, "ASP1", "ASP1");
    //     addOption(document.drop_list2.SubSubCat2, "Perl1", "Perl1");
    // }
    if (document.drop_list2.Category2.value == 'PURBA BARDHAMAN') {
        addOption(document.drop_list2.SubSubCat2, "Bahir Sarbamangala", "Bahir Sarbamangala");
        addOption(document.drop_list2.SubSubCat2, "Bardhaman", "Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Bud Bud", "Bud Bud");
        addOption(document.drop_list2.SubSubCat2, "Dainhat", "Dainhat");
        addOption(document.drop_list2.SubSubCat2, "Dhatrigram", "Dhatrigram");
        addOption(document.drop_list2.SubSubCat2, "Gangpur", "Gangpur");
        addOption(document.drop_list2.SubSubCat2, "Goda, Purba Bardhaman", "Goda, Purba Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Gopinathpur, West Bengal", "Gopinathpur, West Bengal");
        addOption(document.drop_list2.SubSubCat2, "Guskara", "Guskara");
        addOption(document.drop_list2.SubSubCat2, "Hatsimla", "Hatsimla");
        addOption(document.drop_list2.SubSubCat2, "Jaluidanga", "Jaluidanga");
        addOption(document.drop_list2.SubSubCat2, "Kalna City", "Kalna City");
        addOption(document.drop_list2.SubSubCat2, "Katwa", "Katwa");
        addOption(document.drop_list2.SubSubCat2, "Memari", "Memari");
        addOption(document.drop_list2.SubSubCat2, "Mirzapur, Bardhaman", "Mirzapur, Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Nari, Purba Bardhaman", "Nari, Purba Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Nasratpur", "Nasratpur");
        addOption(document.drop_list2.SubSubCat2, "Palsit", "Palsit");
        addOption(document.drop_list2.SubSubCat2, "Panuhat", "Panuhat");
        addOption(document.drop_list2.SubSubCat2, "Piarinagar", "Piarinagar");
        addOption(document.drop_list2.SubSubCat2, "Raipur, Purba Bardhaman", "Raipur, Purba Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Saktigarh, Bardhaman", "Saktigarh, Bardhaman");
        addOption(document.drop_list2.SubSubCat2, "Seharabazar", "Seharabazar");
        addOption(document.drop_list2.SubSubCat2, "Shashpur", "Shashpur");
        addOption(document.drop_list2.SubSubCat2, "Sribati", "Sribati");
        addOption(document.drop_list2.SubSubCat2, "Srirampur, Burdwan", "Srirampur, Burdwan");
        addOption(document.drop_list2.SubSubCat2, "Sukdal", "Sukdal");
        addOption(document.drop_list2.SubSubCat2, "Uttar Goara", "Uttar Goara");
    }
    if (document.drop_list2.Category2.value == 'PURULIA') {
        addOption(document.drop_list2.SubSubCat2, "Adra", "Adra");
        addOption(document.drop_list2.SubSubCat2, "Arra", "Arra");
        addOption(document.drop_list2.SubSubCat2, "Balarampur", "Balarampur");
        addOption(document.drop_list2.SubSubCat2, "Barabazar", "Barabazar");
        addOption(document.drop_list2.SubSubCat2, "Chapari", "Chapari");
        addOption(document.drop_list2.SubSubCat2, "Hijuli", "Hijuli");
        addOption(document.drop_list2.SubSubCat2, "Jhalda", "Jhalda");
        addOption(document.drop_list2.SubSubCat2, "Nabagram", "Nabagram");
        addOption(document.drop_list2.SubSubCat2, "Par Beliya", "Par Beliya");
        addOption(document.drop_list2.SubSubCat2, "Purulia", "Purulia");
        addOption(document.drop_list2.SubSubCat2, "Raghunathpur", "Raghunathpur");
        addOption(document.drop_list2.SubSubCat2, "S.T. Power Project Town", "S.T. Power Project Town");
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