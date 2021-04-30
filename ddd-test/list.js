function fillCategory() {
    // this function is used to fill the category list on load
    addOption(document.drop_list.Category, "WEST BENGAL", "WEST BENGAL", "");
    addOption(document.drop_list.Category, "ANDAMAN AND NICOBAR ISLANDS", "ANDAMAN AND NICOBAR ISLANDS", "");
    addOption(document.drop_list.Category, "ANDHRA PRADESH", "ANDHRA PRADESH", "");
    addOption(document.drop_list.Category, "ARUNACHAL PRADESH", "ARUNACHAL PRADESH", "");
    addOption(document.drop_list.Category, "ASSAM", "ASSAM", "");
    addOption(document.drop_list.Category, "BIHAR", "BIHAR", "");
    addOption(document.drop_list.Category, "CHANDIGARH", "CHANDIGARH", "");
    addOption(document.drop_list.Category, "CHHATTISGARH", "CHHATTISGARH", "");
    addOption(document.drop_list.Category, "DELHI", "DELHI", "");
    addOption(document.drop_list.Category, "GOA", "GOA", "");
    addOption(document.drop_list.Category, "GUJARAT", "GUJARAT", "");
    addOption(document.drop_list.Category, "HARYANA", "HARYANA", "");
    addOption(document.drop_list.Category, "HIMACHAL PRADESH", "HIMACHAL PRADESH", "");
    addOption(document.drop_list.Category, "JAMMU AND KASHMIR", "JAMMU AND KASHMIR", "");
    addOption(document.drop_list.Category, "JHARKHAND", "JHARKHAND", "");
    addOption(document.drop_list.Category, "KARNATAKA", "KARNATAKA", "");
    addOption(document.drop_list.Category, "KERALA", "KERALA", "");
    addOption(document.drop_list.Category, "LADAKH", "LADAKH", "");
    addOption(document.drop_list.Category, "LAKSHADWEEP", "LAKSHADWEEP", "");
    addOption(document.drop_list.Category, "MADHYA PRADESH", "MADHYA PRADESH", "");
    addOption(document.drop_list.Category, "MAHARASHTRA", "MAHARASHTRA", "");
    addOption(document.drop_list.Category, "MANIPUR", "MANIPUR", "");
    addOption(document.drop_list.Category, "MEGHALAYA", "MEGHALAYA", "");
    addOption(document.drop_list.Category, "MIZORAM", "MIZORAM", "");
    addOption(document.drop_list.Category, "NAGALAND", "NAGALAND", "");
    addOption(document.drop_list.Category, "ODISHA", "ODISHA", "");
    addOption(document.drop_list.Category, "PUDUCHERRY", "PUDUCHERRY", "");
    addOption(document.drop_list.Category, "PUNJAB", "PUNJAB", "");
    addOption(document.drop_list.Category, "RAJASTHAN", "RAJASTHAN", "");
    addOption(document.drop_list.Category, "SIKKIM", "SIKKIM", "");
    addOption(document.drop_list.Category, "TAMIL NADU", "TAMIL NADU", "");
    addOption(document.drop_list.Category, "TELANGANA", "TELANGANA", "");
    addOption(document.drop_list.Category, "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "");
    addOption(document.drop_list.Category, "TRIPURA", "TRIPURA", "");
    addOption(document.drop_list.Category, "UTTARAKHAND", "UTTARAKHAND", "");
    addOption(document.drop_list.Category, "UTTAR PRADESH", "UTTAR PRADESH", "");
    addOption(document.drop_list.Category, "WEST BENGAL", "WEST BENGAL", "");


}

function SelectSubCat() {
    // ON selection of category this function will work

    removeAllOptions(document.drop_list.SubCat);
    addOption(document.drop_list.SubCat, "", "SubCat", "");

    if (document.drop_list.Category.value == 'ANDAMAN AND NICOBAR ISLANDS') {
        addOption(document.drop_list.SubCat, "NICOBARS", "NICOBARS");
        addOption(document.drop_list.SubCat, "NORTH AND MIDDLE ANDAMAN", "NORTH AND MIDDLE ANDAMAN");
        addOption(document.drop_list.SubCat, "SOUTH ANDAMANS", "SOUTH ANDAMANS");
    }
    if (document.drop_list.Category.value == 'ANDHRA PRADESH') {
        addOption(document.drop_list.SubCat, "ANANTAPUR", "ANANTAPUR");
        addOption(document.drop_list.SubCat, "CHITTOOR", "CHITTOOR");
        addOption(document.drop_list.SubCat, "EAST GODAVARI", "EAST GODAVARI");
        addOption(document.drop_list.SubCat, "GUNTUR", "GUNTUR");
        addOption(document.drop_list.SubCat, "KRISHNA", "KRISHNA");
        addOption(document.drop_list.SubCat, "KURNOOL", "KURNOOL");
        addOption(document.drop_list.SubCat, "PRAKASAM", "PRAKASAM");
        addOption(document.drop_list.SubCat, "SPSR NELLORE", "SPSR NELLORE");
        addOption(document.drop_list.SubCat, "SRIKAKULAM", "SRIKAKULAM");
        addOption(document.drop_list.SubCat, "VISAKHAPATANAM", "VISAKHAPATANAM");
        addOption(document.drop_list.SubCat, "VIZIANAGARAM", "VIZIANAGARAM");
        addOption(document.drop_list.SubCat, "WEST GODAVARI", "WEST GODAVARI");
        addOption(document.drop_list.SubCat, "Y.S.R.", "Y.S.R.");
    }
    if (document.drop_list.Category.value == 'ARUNACHAL PRADESH') {
        addOption(document.drop_list.SubCat, "ANJAW", "ANJAW");
        addOption(document.drop_list.SubCat, "CHANGLANG", "CHANGLANG");
        addOption(document.drop_list.SubCat, "DIBANG VALLEY", "DIBANG VALLEY");
        addOption(document.drop_list.SubCat, "EAST KAMENG", "EAST KAMENG");
        addOption(document.drop_list.SubCat, "EAST SIANG", "EAST SIANG");
        addOption(document.drop_list.SubCat, "KAMLE", "KAMLE");
        addOption(document.drop_list.SubCat, "KRA DAADI", "KRA DAADI");
        addOption(document.drop_list.SubCat, "KURUNG KUMEY", "KURUNG KUMEY");
        addOption(document.drop_list.SubCat, "LEPARADA", "LEPARADA");
        addOption(document.drop_list.SubCat, "LOHIT", "LOHIT");
        addOption(document.drop_list.SubCat, "LONGDING", "LONGDING");
        addOption(document.drop_list.SubCat, "LOWER DIBANG VALLEY", "LOWER DIBANG VALLEY");
        addOption(document.drop_list.SubCat, "LOWER SIANG", "LOWER SIANG");
        addOption(document.drop_list.SubCat, "LOWER SUBANSIRI", "LOWER SUBANSIRI");
        addOption(document.drop_list.SubCat, "NAMSAI", "NAMSAI");
        addOption(document.drop_list.SubCat, "PAKKE KESSANG", "PAKKE KESSANG");
        addOption(document.drop_list.SubCat, "PAPUM PARE", "PAPUM PARE");
        addOption(document.drop_list.SubCat, "SHI YOMI", "SHI YOMI");
        addOption(document.drop_list.SubCat, "SIANG", "SIANG");
        addOption(document.drop_list.SubCat, "TAWANG", "TAWANG");
        addOption(document.drop_list.SubCat, "TIRAP", "TIRAP");
        addOption(document.drop_list.SubCat, "UPPER SIANG", "UPPER SIANG");
        addOption(document.drop_list.SubCat, "UPPER SUBANSIRI", "UPPER SUBANSIRI");
        addOption(document.drop_list.SubCat, "WEST KAMENG", "WEST KAMENG");
        addOption(document.drop_list.SubCat, "WEST SIANG", "WEST SIANG");
    }
    if (document.drop_list.Category.value == 'ASSAM') {
        addOption(document.drop_list.SubCat, "BAKSA", "BAKSA");
        addOption(document.drop_list.SubCat, "BARPETA", "BARPETA");
        addOption(document.drop_list.SubCat, "Biswanath", "Biswanath");
        addOption(document.drop_list.SubCat, "BONGAIGAON", "BONGAIGAON");
        addOption(document.drop_list.SubCat, "CACHAR", "CACHAR");
        addOption(document.drop_list.SubCat, "CHARAIDEO", "CHARAIDEO");
        addOption(document.drop_list.SubCat, "CHIRANG", "CHIRANG");
        addOption(document.drop_list.SubCat, "DARRANG", "DARRANG");
        addOption(document.drop_list.SubCat, "DHEMAJI", "DHEMAJI");
        addOption(document.drop_list.SubCat, "DHUBRI", "DHUBRI");
        addOption(document.drop_list.SubCat, "DIBRUGARH", "DIBRUGARH");
        addOption(document.drop_list.SubCat, "DIMA HASAO", "DIMA HASAO");
        addOption(document.drop_list.SubCat, "GOALPARA", "GOALPARA");
        addOption(document.drop_list.SubCat, "GOLAGHAT", "GOLAGHAT");
        addOption(document.drop_list.SubCat, "HAILAKANDI", "HAILAKANDI");
        addOption(document.drop_list.SubCat, "HOJAI", "HOJAI");
        addOption(document.drop_list.SubCat, "JORHAT", "JORHAT");
        addOption(document.drop_list.SubCat, "KAMRUP", "KAMRUP");
        addOption(document.drop_list.SubCat, "KAMRUP METRO", "KAMRUP METRO");
        addOption(document.drop_list.SubCat, "KARBI ANGLONG", "KARBI ANGLONG");
        addOption(document.drop_list.SubCat, "KARIMGANJ", "KARIMGANJ");
        addOption(document.drop_list.SubCat, "KOKRAJHAR", "KOKRAJHAR");
        addOption(document.drop_list.SubCat, "LAKHIMPUR", "LAKHIMPUR");
        addOption(document.drop_list.SubCat, "MAJULI", "MAJULI");
        addOption(document.drop_list.SubCat, "MARIGAON", "MARIGAON");
        addOption(document.drop_list.SubCat, "NAGAON", "NAGAON");
        addOption(document.drop_list.SubCat, "NALBARI", "NALBARI");
        addOption(document.drop_list.SubCat, "SIVASAGAR", "SIVASAGAR");
        addOption(document.drop_list.SubCat, "SONITPUR", "SONITPUR");
        addOption(document.drop_list.SubCat, "SOUTH SALMARA MANCACHAR", "SOUTH SALMARA MANCACHAR");
        addOption(document.drop_list.SubCat, "TINSUKIA", "TINSUKIA");
        addOption(document.drop_list.SubCat, "UDALGURI", "UDALGURI");
        addOption(document.drop_list.SubCat, "WEST KARBI ANGLONG", "WEST KARBI ANGLONG");
    }
    if (document.drop_list.Category.value == 'BIHAR') {
        addOption(document.drop_list.SubCat, "ARARIA", "ARARIA");
        addOption(document.drop_list.SubCat, "ARWAL", "ARWAL");
        addOption(document.drop_list.SubCat, "AURANGABAD", "AURANGABAD");
        addOption(document.drop_list.SubCat, "BANKA", "BANKA");
        addOption(document.drop_list.SubCat, "BEGUSARAI", "BEGUSARAI");
        addOption(document.drop_list.SubCat, "BHAGALPUR", "BHAGALPUR");
        addOption(document.drop_list.SubCat, "BHOJPUR", "BHOJPUR");
        addOption(document.drop_list.SubCat, "BUXAR", "BUXAR");
        addOption(document.drop_list.SubCat, "DARBHANGA", "DARBHANGA");
        addOption(document.drop_list.SubCat, "GAYA", "GAYA");
        addOption(document.drop_list.SubCat, "GOPALGANJ", "GOPALGANJ");
        addOption(document.drop_list.SubCat, "JAMUI", "JAMUI");
        addOption(document.drop_list.SubCat, "JEHANABAD", "JEHANABAD");
        addOption(document.drop_list.SubCat, "KAIMUR (BHABUA)", "KAIMUR (BHABUA)");
        addOption(document.drop_list.SubCat, "KATIHAR", "KATIHAR");
        addOption(document.drop_list.SubCat, "KHAGARIA", "KHAGARIA");
        addOption(document.drop_list.SubCat, "KISHANGANJ", "KISHANGANJ");
        addOption(document.drop_list.SubCat, "LAKHISARAI", "LAKHISARAI");
        addOption(document.drop_list.SubCat, "MADHEPURA", "MADHEPURA");
        addOption(document.drop_list.SubCat, "MADHUBANI", "MADHUBANI");
        addOption(document.drop_list.SubCat, "MUNGER", "MUNGER");
        addOption(document.drop_list.SubCat, "MUZAFFARPUR", "MUZAFFARPUR");
        addOption(document.drop_list.SubCat, "NALANDA", "NALANDA");
        addOption(document.drop_list.SubCat, "NAWADA", "NAWADA");
        addOption(document.drop_list.SubCat, "PASHCHIM CHAMPARAN", "PASHCHIM CHAMPARAN");
        addOption(document.drop_list.SubCat, "PATNA", "PATNA");
        addOption(document.drop_list.SubCat, "PURBI CHAMPARAN", "PURBI CHAMPARAN");
        addOption(document.drop_list.SubCat, "PURNIA", "PURNIA");
        addOption(document.drop_list.SubCat, "ROHTAS", "ROHTAS");
        addOption(document.drop_list.SubCat, "SAHARSA", "SAHARSA");
        addOption(document.drop_list.SubCat, "SAMASTIPUR", "SAMASTIPUR");
        addOption(document.drop_list.SubCat, "SARAN", "SARAN");
        addOption(document.drop_list.SubCat, "SHEIKHPURA", "SHEIKHPURA");
        addOption(document.drop_list.SubCat, "SHEOHAR", "SHEOHAR");
        addOption(document.drop_list.SubCat, "SITAMARHI", "SITAMARHI");
        addOption(document.drop_list.SubCat, "SIWAN", "SIWAN");
        addOption(document.drop_list.SubCat, "SUPAUL", "SUPAUL");
        addOption(document.drop_list.SubCat, "VAISHALI", "VAISHALI");
    }
    if (document.drop_list.Category.value == 'CHANDIGARH') {
        addOption(document.drop_list.SubCat, "CHANDIGARH", "CHANDIGARH");
    }
    if (document.drop_list.Category.value == 'CHHATTISGARH') {
        addOption(document.drop_list.SubCat, "BALOD", "BALOD");
        addOption(document.drop_list.SubCat, "BALODA BAZAR", "BALODA BAZAR");
        addOption(document.drop_list.SubCat, "BALRAMPUR", "BALRAMPUR");
        addOption(document.drop_list.SubCat, "BASTAR", "BASTAR");
        addOption(document.drop_list.SubCat, "BEMETARA", "BEMETARA");
        addOption(document.drop_list.SubCat, "BIJAPUR", "BIJAPUR");
        addOption(document.drop_list.SubCat, "BILASPUR", "BILASPUR");
        addOption(document.drop_list.SubCat, "DANTEWADA", "DANTEWADA");
        addOption(document.drop_list.SubCat, "DHAMTARI", "DHAMTARI");
        addOption(document.drop_list.SubCat, "DURG", "DURG");
        addOption(document.drop_list.SubCat, "GARIYABAND", "GARIYABAND");
        addOption(document.drop_list.SubCat, "Gaurella Pendra Marwahi", "Gaurella Pendra Marwahi");
        addOption(document.drop_list.SubCat, "JANJGIR-CHAMPA", "JANJGIR-CHAMPA");
        addOption(document.drop_list.SubCat, "JASHPUR", "JASHPUR");
        addOption(document.drop_list.SubCat, "KABIRDHAM", "KABIRDHAM");
        addOption(document.drop_list.SubCat, "KANKER", "KANKER");
        addOption(document.drop_list.SubCat, "KONDAGAON", "KONDAGAON");
        addOption(document.drop_list.SubCat, "KORBA", "KORBA");
        addOption(document.drop_list.SubCat, "KOREA", "KOREA");
        addOption(document.drop_list.SubCat, "MAHASAMUND", "MAHASAMUND");
        addOption(document.drop_list.SubCat, "MUNGELI", "MUNGELI");
        addOption(document.drop_list.SubCat, "NARAYANPUR", "NARAYANPUR");
        addOption(document.drop_list.SubCat, "RAIGARH", "RAIGARH");
        addOption(document.drop_list.SubCat, "RAIPUR", "RAIPUR");
        addOption(document.drop_list.SubCat, "RAJNANDGAON", "RAJNANDGAON");
        addOption(document.drop_list.SubCat, "SUKMA", "SUKMA");
        addOption(document.drop_list.SubCat, "SURAJPUR", "SURAJPUR");
        addOption(document.drop_list.SubCat, "SURGUJA", "SURGUJA");
    }
    if (document.drop_list.Category.value == 'DELHI') {
        addOption(document.drop_list.SubCat, "CENTRAL", "CENTRAL");
        addOption(document.drop_list.SubCat, "EAST", "EAST");
        addOption(document.drop_list.SubCat, "NEW DELHI", "NEW DELHI");
        addOption(document.drop_list.SubCat, "NORTH", "NORTH");
        addOption(document.drop_list.SubCat, "NORTH EAST", "NORTH EAST");
        addOption(document.drop_list.SubCat, "NORTH WEST", "NORTH WEST");
        addOption(document.drop_list.SubCat, "SHAHDARA", "SHAHDARA");
        addOption(document.drop_list.SubCat, "SOUTH", "SOUTH");
        addOption(document.drop_list.SubCat, "South East", "South East");
        addOption(document.drop_list.SubCat, "SOUTH WEST", "SOUTH WEST");
        addOption(document.drop_list.SubCat, "WEST", "WEST");
    }
    if (document.drop_list.Category.value == 'GOA') {
        addOption(document.drop_list.SubCat, "NORTH GOA", "NORTH GOA");
        addOption(document.drop_list.SubCat, "SOUTH GOA", "SOUTH GOA");
    }
    if (document.drop_list.Category.value == 'GUJARAT') {
        addOption(document.drop_list.SubCat, "AHMADABAD", "AHMADABAD");
        addOption(document.drop_list.SubCat, "AMRELI", "AMRELI");
        addOption(document.drop_list.SubCat, "ANAND", "ANAND");
        addOption(document.drop_list.SubCat, "ARVALLI", "ARVALLI");
        addOption(document.drop_list.SubCat, "BANAS KANTHA", "BANAS KANTHA");
        addOption(document.drop_list.SubCat, "BHARUCH", "BHARUCH");
        addOption(document.drop_list.SubCat, "BHAVNAGAR", "BHAVNAGAR");
        addOption(document.drop_list.SubCat, "BOTAD", "BOTAD");
        addOption(document.drop_list.SubCat, "CHHOTAUDEPUR", "CHHOTAUDEPUR");
        addOption(document.drop_list.SubCat, "DANG", "DANG");
        addOption(document.drop_list.SubCat, "DEVBHUMI DWARKA", "DEVBHUMI DWARKA");
        addOption(document.drop_list.SubCat, "DOHAD", "DOHAD");
        addOption(document.drop_list.SubCat, "GANDHINAGAR", "GANDHINAGAR");
        addOption(document.drop_list.SubCat, "GIR SOMNATH", "GIR SOMNATH");
        addOption(document.drop_list.SubCat, "JAMNAGAR", "JAMNAGAR");
        addOption(document.drop_list.SubCat, "JUNAGADH", "JUNAGADH");
        addOption(document.drop_list.SubCat, "KACHCHH", "KACHCHH");
        addOption(document.drop_list.SubCat, "KHEDA", "KHEDA");
        addOption(document.drop_list.SubCat, "MAHESANA", "MAHESANA");
        addOption(document.drop_list.SubCat, "Mahisagar", "Mahisagar");
        addOption(document.drop_list.SubCat, "MORBI", "MORBI");
        addOption(document.drop_list.SubCat, "NARMADA", "NARMADA");
        addOption(document.drop_list.SubCat, "NAVSARI", "NAVSARI");
        addOption(document.drop_list.SubCat, "PANCH MAHALS", "PANCH MAHALS");
        addOption(document.drop_list.SubCat, "PATAN", "PATAN");
        addOption(document.drop_list.SubCat, "PORBANDAR", "PORBANDAR");
        addOption(document.drop_list.SubCat, "RAJKOT", "RAJKOT");
        addOption(document.drop_list.SubCat, "SABAR KANTHA", "SABAR KANTHA");
        addOption(document.drop_list.SubCat, "SURAT", "SURAT");
        addOption(document.drop_list.SubCat, "SURENDRANAGAR", "SURENDRANAGAR");
        addOption(document.drop_list.SubCat, "TAPI", "TAPI");
        addOption(document.drop_list.SubCat, "VADODARA", "VADODARA");
        addOption(document.drop_list.SubCat, "VALSAD", "VALSAD");
    }
    if (document.drop_list.Category.value == 'HARYANA') {
        addOption(document.drop_list.SubCat, "AMBALA", "AMBALA");
        addOption(document.drop_list.SubCat, "BHIWANI", "BHIWANI");
        addOption(document.drop_list.SubCat, "CHARKI DADRI", "CHARKI DADRI");
        addOption(document.drop_list.SubCat, "FARIDABAD", "FARIDABAD");
        addOption(document.drop_list.SubCat, "FATEHABAD", "FATEHABAD");
        addOption(document.drop_list.SubCat, "GURUGRAM", "GURUGRAM");
        addOption(document.drop_list.SubCat, "HISAR", "HISAR");
        addOption(document.drop_list.SubCat, "JHAJJAR", "JHAJJAR");
        addOption(document.drop_list.SubCat, "JIND", "JIND");
        addOption(document.drop_list.SubCat, "KAITHAL", "KAITHAL");
        addOption(document.drop_list.SubCat, "KARNAL", "KARNAL");
        addOption(document.drop_list.SubCat, "KURUKSHETRA", "KURUKSHETRA");
        addOption(document.drop_list.SubCat, "MAHENDRAGARH", "MAHENDRAGARH");
        addOption(document.drop_list.SubCat, "NUH", "NUH");
        addOption(document.drop_list.SubCat, "PALWAL", "PALWAL");
        addOption(document.drop_list.SubCat, "PANCHKULA", "PANCHKULA");
        addOption(document.drop_list.SubCat, "PANIPAT", "PANIPAT");
        addOption(document.drop_list.SubCat, "REWARI", "REWARI");
        addOption(document.drop_list.SubCat, "ROHTAK", "ROHTAK");
        addOption(document.drop_list.SubCat, "SIRSA", "SIRSA");
        addOption(document.drop_list.SubCat, "SONIPAT", "SONIPAT");
        addOption(document.drop_list.SubCat, "YAMUNANAGAR", "YAMUNANAGAR");
    }
    if (document.drop_list.Category.value == 'HIMACHAL PRADESH') {
        addOption(document.drop_list.SubCat, "BILASPUR", "BILASPUR");
        addOption(document.drop_list.SubCat, "CHAMBA", "CHAMBA");
        addOption(document.drop_list.SubCat, "HAMIRPUR", "HAMIRPUR");
        addOption(document.drop_list.SubCat, "KANGRA", "KANGRA");
        addOption(document.drop_list.SubCat, "KINNAUR", "KINNAUR");
        addOption(document.drop_list.SubCat, "KULLU", "KULLU");
        addOption(document.drop_list.SubCat, "LAHUL AND SPITI", "LAHUL AND SPITI");
        addOption(document.drop_list.SubCat, "MANDI", "MANDI");
        addOption(document.drop_list.SubCat, "SHIMLA", "SHIMLA");
        addOption(document.drop_list.SubCat, "SIRMAUR", "SIRMAUR");
        addOption(document.drop_list.SubCat, "SOLAN", "SOLAN");
        addOption(document.drop_list.SubCat, "UNA", "UNA");
    }
    if (document.drop_list.Category.value == 'JAMMU AND KASHMIR') {
        addOption(document.drop_list.SubCat, "ANANTNAG", "ANANTNAG");
        addOption(document.drop_list.SubCat, "BANDIPORA", "BANDIPORA");
        addOption(document.drop_list.SubCat, "BARAMULLA", "BARAMULLA");
        addOption(document.drop_list.SubCat, "Budgam", "Budgam");
        addOption(document.drop_list.SubCat, "DODA", "DODA");
        addOption(document.drop_list.SubCat, "GANDERBAL", "GANDERBAL");
        addOption(document.drop_list.SubCat, "JAMMU", "JAMMU");
        addOption(document.drop_list.SubCat, "KATHUA", "KATHUA");
        addOption(document.drop_list.SubCat, "KISHTWAR", "KISHTWAR");
        addOption(document.drop_list.SubCat, "KULGAM", "KULGAM");
        addOption(document.drop_list.SubCat, "KUPWARA", "KUPWARA");
        addOption(document.drop_list.SubCat, "POONCH", "POONCH");
        addOption(document.drop_list.SubCat, "PULWAMA", "PULWAMA");
        addOption(document.drop_list.SubCat, "RAJOURI", "RAJOURI");
        addOption(document.drop_list.SubCat, "RAMBAN", "RAMBAN");
        addOption(document.drop_list.SubCat, "REASI", "REASI");
        addOption(document.drop_list.SubCat, "SAMBA", "SAMBA");
        addOption(document.drop_list.SubCat, "SHOPIAN", "SHOPIAN");
        addOption(document.drop_list.SubCat, "SRINAGAR", "SRINAGAR");
        addOption(document.drop_list.SubCat, "UDHAMPUR", "UDHAMPUR");
    }
    if (document.drop_list.Category.value == 'JHARKHAND') {
        addOption(document.drop_list.SubCat, "BOKARO", "BOKARO");
        addOption(document.drop_list.SubCat, "CHATRA", "CHATRA");
        addOption(document.drop_list.SubCat, "DEOGHAR", "DEOGHAR");
        addOption(document.drop_list.SubCat, "DHANBAD", "DHANBAD");
        addOption(document.drop_list.SubCat, "DUMKA", "DUMKA");
        addOption(document.drop_list.SubCat, "EAST SINGHBUM", "EAST SINGHBUM");
        addOption(document.drop_list.SubCat, "GARHWA", "GARHWA");
        addOption(document.drop_list.SubCat, "GIRIDIH", "GIRIDIH");
        addOption(document.drop_list.SubCat, "GODDA", "GODDA");
        addOption(document.drop_list.SubCat, "GUMLA", "GUMLA");
        addOption(document.drop_list.SubCat, "HAZARIBAGH", "HAZARIBAGH");
        addOption(document.drop_list.SubCat, "JAMTARA", "JAMTARA");
        addOption(document.drop_list.SubCat, "KHUNTI", "KHUNTI");
        addOption(document.drop_list.SubCat, "KODERMA", "KODERMA");
        addOption(document.drop_list.SubCat, "LATEHAR", "LATEHAR");
        addOption(document.drop_list.SubCat, "LOHARDAGA", "LOHARDAGA");
        addOption(document.drop_list.SubCat, "PAKUR", "PAKUR");
        addOption(document.drop_list.SubCat, "PALAMU", "PALAMU");
        addOption(document.drop_list.SubCat, "RAMGARH", "RAMGARH");
        addOption(document.drop_list.SubCat, "RANCHI", "RANCHI");
        addOption(document.drop_list.SubCat, "SAHEBGANJ", "SAHEBGANJ");
        addOption(document.drop_list.SubCat, "SARAIKELA KHARSAWAN", "SARAIKELA KHARSAWAN");
        addOption(document.drop_list.SubCat, "SIMDEGA", "SIMDEGA");
        addOption(document.drop_list.SubCat, "WEST SINGHBHUM", "WEST SINGHBHUM");
    }
    if (document.drop_list.Category.value == 'KARNATAKA') {
        addOption(document.drop_list.SubCat, "BAGALKOTE", "BAGALKOTE");
        addOption(document.drop_list.SubCat, "BALLARI", "BALLARI");
        addOption(document.drop_list.SubCat, "BELAGAVI", "BELAGAVI");
        addOption(document.drop_list.SubCat, "BENGALURU RURAL", "BENGALURU RURAL");
        addOption(document.drop_list.SubCat, "BENGALURU URBAN", "BENGALURU URBAN");
        addOption(document.drop_list.SubCat, "BIDAR", "BIDAR");
        addOption(document.drop_list.SubCat, "CHAMARAJANAGARA", "CHAMARAJANAGARA");
        addOption(document.drop_list.SubCat, "CHIKKABALLAPURA", "CHIKKABALLAPURA");
        addOption(document.drop_list.SubCat, "CHIKKAMAGALURU", "CHIKKAMAGALURU");
        addOption(document.drop_list.SubCat, "CHITRADURGA", "CHITRADURGA");
        addOption(document.drop_list.SubCat, "DAKSHINA KANNADA", "DAKSHINA KANNADA");
        addOption(document.drop_list.SubCat, "DAVANGERE", "DAVANGERE");
        addOption(document.drop_list.SubCat, "DHARWAD", "DHARWAD");
        addOption(document.drop_list.SubCat, "GADAG", "GADAG");
        addOption(document.drop_list.SubCat, "HASSAN", "HASSAN");
        addOption(document.drop_list.SubCat, "HAVERI", "HAVERI");
        addOption(document.drop_list.SubCat, "KALABURAGI", "KALABURAGI");
        addOption(document.drop_list.SubCat, "KODAGU", "KODAGU");
        addOption(document.drop_list.SubCat, "KOLAR", "KOLAR");
        addOption(document.drop_list.SubCat, "KOPPAL", "KOPPAL");
        addOption(document.drop_list.SubCat, "MANDYA", "MANDYA");
        addOption(document.drop_list.SubCat, "MYSURU", "MYSURU");
        addOption(document.drop_list.SubCat, "RAICHUR", "RAICHUR");
        addOption(document.drop_list.SubCat, "RAMANAGARA", "RAMANAGARA");
        addOption(document.drop_list.SubCat, "SHIVAMOGGA", "SHIVAMOGGA");
        addOption(document.drop_list.SubCat, "TUMAKURU", "TUMAKURU");
        addOption(document.drop_list.SubCat, "UDUPI", "UDUPI");
        addOption(document.drop_list.SubCat, "UTTARA KANNADA", "UTTARA KANNADA");
        addOption(document.drop_list.SubCat, "VIJAYAPURA", "VIJAYAPURA");
        addOption(document.drop_list.SubCat, "YADGIR", "YADGIR");
    }
    if (document.drop_list.Category.value == 'KERALA') {
        addOption(document.drop_list.SubCat, "ALAPPUZHA", "ALAPPUZHA");
        addOption(document.drop_list.SubCat, "ERNAKULAM", "ERNAKULAM");
        addOption(document.drop_list.SubCat, "IDUKKI", "IDUKKI");
        addOption(document.drop_list.SubCat, "KANNUR", "KANNUR");
        addOption(document.drop_list.SubCat, "KASARAGOD", "KASARAGOD");
        addOption(document.drop_list.SubCat, "KOLLAM", "KOLLAM");
        addOption(document.drop_list.SubCat, "KOTTAYAM", "KOTTAYAM");
        addOption(document.drop_list.SubCat, "KOZHIKODE", "KOZHIKODE");
        addOption(document.drop_list.SubCat, "MALAPPURAM", "MALAPPURAM");
        addOption(document.drop_list.SubCat, "PALAKKAD", "PALAKKAD");
        addOption(document.drop_list.SubCat, "PATHANAMTHITTA", "PATHANAMTHITTA");
        addOption(document.drop_list.SubCat, "THIRUVANANTHAPURAM", "THIRUVANANTHAPURAM");
        addOption(document.drop_list.SubCat, "THRISSUR", "THRISSUR");
        addOption(document.drop_list.SubCat, "WAYANAD", "WAYANAD");
    }
    if (document.drop_list.Category.value == 'LADAKH') {
        addOption(document.drop_list.SubCat, "KARGIL", "KARGIL");
        addOption(document.drop_list.SubCat, "LEH LADAKH", "LEH LADAKH");
    }
    if (document.drop_list.Category.value == 'LAKSHADWEEP') {
        addOption(document.drop_list.SubCat, "LAKSHADWEEP DISTRICT", "LAKSHADWEEP DISTRICT");
    }
    if (document.drop_list.Category.value == 'MADHYA PRADESH') {
        addOption(document.drop_list.SubCat, "AGAR MALWA", "AGAR MALWA");
        addOption(document.drop_list.SubCat, "ALIRAJPUR", "ALIRAJPUR");
        addOption(document.drop_list.SubCat, "ANUPPUR", "ANUPPUR");
        addOption(document.drop_list.SubCat, "ASHOKNAGAR", "ASHOKNAGAR");
        addOption(document.drop_list.SubCat, "BALAGHAT", "BALAGHAT");
        addOption(document.drop_list.SubCat, "BARWANI", "BARWANI");
        addOption(document.drop_list.SubCat, "BETUL", "BETUL");
        addOption(document.drop_list.SubCat, "BHIND", "BHIND");
        addOption(document.drop_list.SubCat, "BHOPAL", "BHOPAL");
        addOption(document.drop_list.SubCat, "BURHANPUR", "BURHANPUR");
        addOption(document.drop_list.SubCat, "CHHATARPUR", "CHHATARPUR");
        addOption(document.drop_list.SubCat, "CHHINDWARA", "CHHINDWARA");
        addOption(document.drop_list.SubCat, "DAMOH", "DAMOH");
        addOption(document.drop_list.SubCat, "DATIA", "DATIA");
        addOption(document.drop_list.SubCat, "DEWAS", "DEWAS");
        addOption(document.drop_list.SubCat, "DHAR", "DHAR");
        addOption(document.drop_list.SubCat, "DINDORI", "DINDORI");
        addOption(document.drop_list.SubCat, "EAST NIMAR", "EAST NIMAR");
        addOption(document.drop_list.SubCat, "GUNA", "GUNA");
        addOption(document.drop_list.SubCat, "GWALIOR", "GWALIOR");
        addOption(document.drop_list.SubCat, "HARDA", "HARDA");
        addOption(document.drop_list.SubCat, "HOSHANGABAD", "HOSHANGABAD");
        addOption(document.drop_list.SubCat, "INDORE", "INDORE");
        addOption(document.drop_list.SubCat, "JABALPUR", "JABALPUR");
        addOption(document.drop_list.SubCat, "JHABUA", "JHABUA");
        addOption(document.drop_list.SubCat, "KATNI", "KATNI");
        addOption(document.drop_list.SubCat, "KHARGONE", "KHARGONE");
        addOption(document.drop_list.SubCat, "MANDLA", "MANDLA");
        addOption(document.drop_list.SubCat, "MANDSAUR", "MANDSAUR");
        addOption(document.drop_list.SubCat, "MORENA", "MORENA");
        addOption(document.drop_list.SubCat, "NARSINGHPUR", "NARSINGHPUR");
        addOption(document.drop_list.SubCat, "NEEMUCH", "NEEMUCH");
        addOption(document.drop_list.SubCat, "Niwari", "Niwari");
        addOption(document.drop_list.SubCat, "PANNA", "PANNA");
        addOption(document.drop_list.SubCat, "RAISEN", "RAISEN");
        addOption(document.drop_list.SubCat, "RAJGARH", "RAJGARH");
        addOption(document.drop_list.SubCat, "RATLAM", "RATLAM");
        addOption(document.drop_list.SubCat, "REWA", "REWA");
        addOption(document.drop_list.SubCat, "SAGAR", "SAGAR");
        addOption(document.drop_list.SubCat, "SATNA", "SATNA");
        addOption(document.drop_list.SubCat, "SEHORE", "SEHORE");
        addOption(document.drop_list.SubCat, "SEONI", "SEONI");
        addOption(document.drop_list.SubCat, "SHAHDOL", "SHAHDOL");
        addOption(document.drop_list.SubCat, "SHAJAPUR", "SHAJAPUR");
        addOption(document.drop_list.SubCat, "SHEOPUR", "SHEOPUR");
        addOption(document.drop_list.SubCat, "SHIVPURI", "SHIVPURI");
        addOption(document.drop_list.SubCat, "SIDHI", "SIDHI");
        addOption(document.drop_list.SubCat, "SINGRAULI", "SINGRAULI");
        addOption(document.drop_list.SubCat, "TIKAMGARH", "TIKAMGARH");
        addOption(document.drop_list.SubCat, "UJJAIN", "UJJAIN");
        addOption(document.drop_list.SubCat, "UMARIA", "UMARIA");
        addOption(document.drop_list.SubCat, "VIDISHA", "VIDISHA");
    }
    if (document.drop_list.Category.value == 'MAHARASHTRA') {
        addOption(document.drop_list.SubCat, "AHMEDNAGAR", "AHMEDNAGAR");
        addOption(document.drop_list.SubCat, "AKOLA", "AKOLA");
        addOption(document.drop_list.SubCat, "AMRAVATI", "AMRAVATI");
        addOption(document.drop_list.SubCat, "AURANGABAD", "AURANGABAD");
        addOption(document.drop_list.SubCat, "BEED", "BEED");
        addOption(document.drop_list.SubCat, "BHANDARA", "BHANDARA");
        addOption(document.drop_list.SubCat, "BULDHANA", "BULDHANA");
        addOption(document.drop_list.SubCat, "CHANDRAPUR", "CHANDRAPUR");
        addOption(document.drop_list.SubCat, "DHULE", "DHULE");
        addOption(document.drop_list.SubCat, "GADCHIROLI", "GADCHIROLI");
        addOption(document.drop_list.SubCat, "GONDIA", "GONDIA");
        addOption(document.drop_list.SubCat, "HINGOLI", "HINGOLI");
        addOption(document.drop_list.SubCat, "JALGAON", "JALGAON");
        addOption(document.drop_list.SubCat, "JALNA", "JALNA");
        addOption(document.drop_list.SubCat, "KOLHAPUR", "KOLHAPUR");
        addOption(document.drop_list.SubCat, "LATUR", "LATUR");
        addOption(document.drop_list.SubCat, "MUMBAI", "MUMBAI");
        addOption(document.drop_list.SubCat, "MUMBAI SUBURBAN", "MUMBAI SUBURBAN");
        addOption(document.drop_list.SubCat, "NAGPUR", "NAGPUR");
        addOption(document.drop_list.SubCat, "NANDED", "NANDED");
        addOption(document.drop_list.SubCat, "NANDURBAR", "NANDURBAR");
        addOption(document.drop_list.SubCat, "NASHIK", "NASHIK");
        addOption(document.drop_list.SubCat, "OSMANABAD", "OSMANABAD");
        addOption(document.drop_list.SubCat, "PALGHAR", "PALGHAR");
        addOption(document.drop_list.SubCat, "PARBHANI", "PARBHANI");
        addOption(document.drop_list.SubCat, "PUNE", "PUNE");
        addOption(document.drop_list.SubCat, "RAIGAD", "RAIGAD");
        addOption(document.drop_list.SubCat, "RATNAGIRI", "RATNAGIRI");
        addOption(document.drop_list.SubCat, "SANGLI", "SANGLI");
        addOption(document.drop_list.SubCat, "SATARA", "SATARA");
        addOption(document.drop_list.SubCat, "SINDHUDURG", "SINDHUDURG");
        addOption(document.drop_list.SubCat, "SOLAPUR", "SOLAPUR");
        addOption(document.drop_list.SubCat, "THANE", "THANE");
        addOption(document.drop_list.SubCat, "WARDHA", "WARDHA");
        addOption(document.drop_list.SubCat, "WASHIM", "WASHIM");
        addOption(document.drop_list.SubCat, "YAVATMAL", "YAVATMAL");
    }
    if (document.drop_list.Category.value == 'MANIPUR') {
        addOption(document.drop_list.SubCat, "BISHNUPUR", "BISHNUPUR");
        addOption(document.drop_list.SubCat, "CHANDEL", "CHANDEL");
        addOption(document.drop_list.SubCat, "CHURACHANDPUR", "CHURACHANDPUR");
        addOption(document.drop_list.SubCat, "IMPHAL EAST", "IMPHAL EAST");
        addOption(document.drop_list.SubCat, "IMPHAL WEST", "IMPHAL WEST");
        addOption(document.drop_list.SubCat, "JIRIBAM", "JIRIBAM");
        addOption(document.drop_list.SubCat, "KAKCHING", "KAKCHING");
        addOption(document.drop_list.SubCat, "KAMJONG", "KAMJONG");
        addOption(document.drop_list.SubCat, "KANGPOKPI", "KANGPOKPI");
        addOption(document.drop_list.SubCat, "NONEY", "NONEY");
        addOption(document.drop_list.SubCat, "PHERZAWL", "PHERZAWL");
        addOption(document.drop_list.SubCat, "SENAPATI", "SENAPATI");
        addOption(document.drop_list.SubCat, "TAMENGLONG", "TAMENGLONG");
        addOption(document.drop_list.SubCat, "TENGNOUPAL", "TENGNOUPAL");
        addOption(document.drop_list.SubCat, "THOUBAL", "THOUBAL");
        addOption(document.drop_list.SubCat, "UKHRUL", "UKHRUL");
    }
    if (document.drop_list.Category.value == 'MEGHALAYA') {
        addOption(document.drop_list.SubCat, "EAST GARO HILLS", "EAST GARO HILLS");
        addOption(document.drop_list.SubCat, "EAST JAINTIA HILLS", "EAST JAINTIA HILLS");
        addOption(document.drop_list.SubCat, "EAST KHASI HILLS", "EAST KHASI HILLS");
        addOption(document.drop_list.SubCat, "NORTH GARO HILLS", "NORTH GARO HILLS");
        addOption(document.drop_list.SubCat, "RI BHOI", "RI BHOI");
        addOption(document.drop_list.SubCat, "SOUTH GARO HILLS", "SOUTH GARO HILLS");
        addOption(document.drop_list.SubCat, "SOUTH WEST GARO HILLS", "SOUTH WEST GARO HILLS");
        addOption(document.drop_list.SubCat, "SOUTH WEST KHASI HILLS", "SOUTH WEST KHASI HILLS");
        addOption(document.drop_list.SubCat, "WEST GARO HILLS", "WEST GARO HILLS");
        addOption(document.drop_list.SubCat, "WEST JAINTIA HILLS", "WEST JAINTIA HILLS");
        addOption(document.drop_list.SubCat, "WEST KHASI HILLS", "WEST KHASI HILLS");
    }
    if (document.drop_list.Category.value == 'MIZORAM') {
        addOption(document.drop_list.SubCat, "AIZAWL", "AIZAWL");
        addOption(document.drop_list.SubCat, "CHAMPHAI", "CHAMPHAI");
        addOption(document.drop_list.SubCat, "Hnahthial", "Hnahthial");
        addOption(document.drop_list.SubCat, "KHAWZAWL", "KHAWZAWL");
        addOption(document.drop_list.SubCat, "KOLASIB", "KOLASIB");
        addOption(document.drop_list.SubCat, "LAWNGTLAI", "LAWNGTLAI");
        addOption(document.drop_list.SubCat, "LUNGLEI", "LUNGLEI");
        addOption(document.drop_list.SubCat, "MAMIT", "MAMIT");
        addOption(document.drop_list.SubCat, "SAIHA", "SAIHA");
        addOption(document.drop_list.SubCat, "SAITUAL", "SAITUAL");
        addOption(document.drop_list.SubCat, "SERCHHIP", "SERCHHIP");
    }
    if (document.drop_list.Category.value == 'NAGALAND') {
        addOption(document.drop_list.SubCat, "DIMAPUR", "DIMAPUR");
        addOption(document.drop_list.SubCat, "KIPHIRE", "KIPHIRE");
        addOption(document.drop_list.SubCat, "KOHIMA", "KOHIMA");
        addOption(document.drop_list.SubCat, "LONGLENG", "LONGLENG");
        addOption(document.drop_list.SubCat, "MOKOKCHUNG", "MOKOKCHUNG");
        addOption(document.drop_list.SubCat, "MON", "MON");
        addOption(document.drop_list.SubCat, "Noklak", "Noklak");
        addOption(document.drop_list.SubCat, "PEREN", "PEREN");
        addOption(document.drop_list.SubCat, "PHEK", "PHEK");
        addOption(document.drop_list.SubCat, "TUENSANG", "TUENSANG");
        addOption(document.drop_list.SubCat, "WOKHA", "WOKHA");
        addOption(document.drop_list.SubCat, "ZUNHEBOTO", "ZUNHEBOTO");
    }
    if (document.drop_list.Category.value == 'ODISHA') {
        addOption(document.drop_list.SubCat, "ANUGUL", "ANUGUL");
        addOption(document.drop_list.SubCat, "BALANGIR", "BALANGIR");
        addOption(document.drop_list.SubCat, "BALESHWAR", "BALESHWAR");
        addOption(document.drop_list.SubCat, "BARGARH", "BARGARH");
        addOption(document.drop_list.SubCat, "BHADRAK", "BHADRAK");
        addOption(document.drop_list.SubCat, "BOUDH", "BOUDH");
        addOption(document.drop_list.SubCat, "CUTTACK", "CUTTACK");
        addOption(document.drop_list.SubCat, "DEOGARH", "DEOGARH");
        addOption(document.drop_list.SubCat, "DHENKANAL", "DHENKANAL");
        addOption(document.drop_list.SubCat, "GAJAPATI", "GAJAPATI");
        addOption(document.drop_list.SubCat, "GANJAM", "GANJAM");
        addOption(document.drop_list.SubCat, "JAGATSINGHAPUR", "JAGATSINGHAPUR");
        addOption(document.drop_list.SubCat, "JAJAPUR", "JAJAPUR");
        addOption(document.drop_list.SubCat, "JHARSUGUDA", "JHARSUGUDA");
        addOption(document.drop_list.SubCat, "KALAHANDI", "KALAHANDI");
        addOption(document.drop_list.SubCat, "KANDHAMAL", "KANDHAMAL");
        addOption(document.drop_list.SubCat, "KENDRAPARA", "KENDRAPARA");
        addOption(document.drop_list.SubCat, "KENDUJHAR", "KENDUJHAR");
        addOption(document.drop_list.SubCat, "KHORDHA", "KHORDHA");
        addOption(document.drop_list.SubCat, "KORAPUT", "KORAPUT");
        addOption(document.drop_list.SubCat, "MALKANGIRI", "MALKANGIRI");
        addOption(document.drop_list.SubCat, "MAYURBHANJ", "MAYURBHANJ");
        addOption(document.drop_list.SubCat, "NABARANGPUR", "NABARANGPUR");
        addOption(document.drop_list.SubCat, "NAYAGARH", "NAYAGARH");
        addOption(document.drop_list.SubCat, "NUAPADA", "NUAPADA");
        addOption(document.drop_list.SubCat, "PURI", "PURI");
        addOption(document.drop_list.SubCat, "RAYAGADA", "RAYAGADA");
        addOption(document.drop_list.SubCat, "SAMBALPUR", "SAMBALPUR");
        addOption(document.drop_list.SubCat, "SONEPUR", "SONEPUR");
        addOption(document.drop_list.SubCat, "SUNDARGARH", "SUNDARGARH");
    }
    if (document.drop_list.Category.value == 'PUDUCHERRY') {
        addOption(document.drop_list.SubCat, "KARAIKAL", "KARAIKAL");
        addOption(document.drop_list.SubCat, "MAHE", "MAHE");
        addOption(document.drop_list.SubCat, "PONDICHERRY", "PONDICHERRY");
        addOption(document.drop_list.SubCat, "YANAM", "YANAM");
    }
    if (document.drop_list.Category.value == 'PUNJAB') {
        addOption(document.drop_list.SubCat, "AMRITSAR", "AMRITSAR");
        addOption(document.drop_list.SubCat, "BARNALA", "BARNALA");
        addOption(document.drop_list.SubCat, "BATHINDA", "BATHINDA");
        addOption(document.drop_list.SubCat, "FARIDKOT", "FARIDKOT");
        addOption(document.drop_list.SubCat, "FATEHGARH SAHIB", "FATEHGARH SAHIB");
        addOption(document.drop_list.SubCat, "FAZILKA", "FAZILKA");
        addOption(document.drop_list.SubCat, "FIROZEPUR", "FIROZEPUR");
        addOption(document.drop_list.SubCat, "GURDASPUR", "GURDASPUR");
        addOption(document.drop_list.SubCat, "HOSHIARPUR", "HOSHIARPUR");
        addOption(document.drop_list.SubCat, "JALANDHAR", "JALANDHAR");
        addOption(document.drop_list.SubCat, "KAPURTHALA", "KAPURTHALA");
        addOption(document.drop_list.SubCat, "LUDHIANA", "LUDHIANA");
        addOption(document.drop_list.SubCat, "MANSA", "MANSA");
        addOption(document.drop_list.SubCat, "MOGA", "MOGA");
        addOption(document.drop_list.SubCat, "PATHANKOT", "PATHANKOT");
        addOption(document.drop_list.SubCat, "PATIALA", "PATIALA");
        addOption(document.drop_list.SubCat, "RUPNAGAR", "RUPNAGAR");
        addOption(document.drop_list.SubCat, "SANGRUR", "SANGRUR");
        addOption(document.drop_list.SubCat, "S.A.S Nagar", "S.A.S Nagar");
        addOption(document.drop_list.SubCat, "Shahid Bhagat Singh Nagar", "Shahid Bhagat Singh Nagar");
        addOption(document.drop_list.SubCat, "SRI MUKTSAR SAHIB", "SRI MUKTSAR SAHIB");
        addOption(document.drop_list.SubCat, "Tarn Taran", "Tarn Taran");
    }
    if (document.drop_list.Category.value == 'RAJASTHAN') {
        addOption(document.drop_list.SubCat, "AJMER", "AJMER");
        addOption(document.drop_list.SubCat, "ALWAR", "ALWAR");
        addOption(document.drop_list.SubCat, "BANSWARA", "BANSWARA");
        addOption(document.drop_list.SubCat, "BARAN", "BARAN");
        addOption(document.drop_list.SubCat, "BARMER", "BARMER");
        addOption(document.drop_list.SubCat, "BHARATPUR", "BHARATPUR");
        addOption(document.drop_list.SubCat, "BHILWARA", "BHILWARA");
        addOption(document.drop_list.SubCat, "BIKANER", "BIKANER");
        addOption(document.drop_list.SubCat, "BUNDI", "BUNDI");
        addOption(document.drop_list.SubCat, "CHITTORGARH", "CHITTORGARH");
        addOption(document.drop_list.SubCat, "CHURU", "CHURU");
        addOption(document.drop_list.SubCat, "DAUSA", "DAUSA");
        addOption(document.drop_list.SubCat, "DHOLPUR", "DHOLPUR");
        addOption(document.drop_list.SubCat, "DUNGARPUR", "DUNGARPUR");
        addOption(document.drop_list.SubCat, "GANGANAGAR", "GANGANAGAR");
        addOption(document.drop_list.SubCat, "HANUMANGARH", "HANUMANGARH");
        addOption(document.drop_list.SubCat, "JAIPUR", "JAIPUR");
        addOption(document.drop_list.SubCat, "JAISALMER", "JAISALMER");
        addOption(document.drop_list.SubCat, "JALORE", "JALORE");
        addOption(document.drop_list.SubCat, "JHALAWAR", "JHALAWAR");
        addOption(document.drop_list.SubCat, "JHUNJHUNU", "JHUNJHUNU");
        addOption(document.drop_list.SubCat, "JODHPUR", "JODHPUR");
        addOption(document.drop_list.SubCat, "KARAULI", "KARAULI");
        addOption(document.drop_list.SubCat, "KOTA", "KOTA");
        addOption(document.drop_list.SubCat, "NAGAUR", "NAGAUR");
        addOption(document.drop_list.SubCat, "PALI", "PALI");
        addOption(document.drop_list.SubCat, "PRATAPGARH", "PRATAPGARH");
        addOption(document.drop_list.SubCat, "RAJSAMAND", "RAJSAMAND");
        addOption(document.drop_list.SubCat, "SAWAI MADHOPUR", "SAWAI MADHOPUR");
        addOption(document.drop_list.SubCat, "SIKAR", "SIKAR");
        addOption(document.drop_list.SubCat, "SIROHI", "SIROHI");
        addOption(document.drop_list.SubCat, "TONK", "TONK");
        addOption(document.drop_list.SubCat, "UDAIPUR", "UDAIPUR");
    }
    if (document.drop_list.Category.value == 'SIKKIM') {
        addOption(document.drop_list.SubCat, "EAST DISTRICT", "EAST DISTRICT");
        addOption(document.drop_list.SubCat, "NORTH DISTRICT", "NORTH DISTRICT");
        addOption(document.drop_list.SubCat, "SOUTH DISTRICT", "SOUTH DISTRICT");
        addOption(document.drop_list.SubCat, "WEST DISTRICT", "WEST DISTRICT");
    }
    if (document.drop_list.Category.value == 'TAMIL NADU') {
        addOption(document.drop_list.SubCat, "Ariyalur", "Ariyalur");
        addOption(document.drop_list.SubCat, "CHENGALPATTU", "CHENGALPATTU");
        addOption(document.drop_list.SubCat, "CHENNAI", "CHENNAI");
        addOption(document.drop_list.SubCat, "COIMBATORE", "COIMBATORE");
        addOption(document.drop_list.SubCat, "CUDDALORE", "CUDDALORE");
        addOption(document.drop_list.SubCat, "DHARMAPURI", "DHARMAPURI");
        addOption(document.drop_list.SubCat, "DINDIGUL", "DINDIGUL");
        addOption(document.drop_list.SubCat, "ERODE", "ERODE");
        addOption(document.drop_list.SubCat, "KALLAKURICHI", "KALLAKURICHI");
        addOption(document.drop_list.SubCat, "KANCHIPURAM", "KANCHIPURAM");
        addOption(document.drop_list.SubCat, "KANNIYAKUMARI", "KANNIYAKUMARI");
        addOption(document.drop_list.SubCat, "KARUR", "KARUR");
        addOption(document.drop_list.SubCat, "KRISHNAGIRI", "KRISHNAGIRI");
        addOption(document.drop_list.SubCat, "MADURAI", "MADURAI");
        addOption(document.drop_list.SubCat, "Mayiladuthurai", "Mayiladuthurai");
        addOption(document.drop_list.SubCat, "NAGAPATTINAM", "NAGAPATTINAM");
        addOption(document.drop_list.SubCat, "NAMAKKAL", "NAMAKKAL");
        addOption(document.drop_list.SubCat, "PERAMBALUR", "PERAMBALUR");
        addOption(document.drop_list.SubCat, "PUDUKKOTTAI", "PUDUKKOTTAI");
        addOption(document.drop_list.SubCat, "RAMANATHAPURAM", "RAMANATHAPURAM");
        addOption(document.drop_list.SubCat, "Ranipet", "Ranipet");
        addOption(document.drop_list.SubCat, "SALEM", "SALEM");
        addOption(document.drop_list.SubCat, "SIVAGANGA", "SIVAGANGA");
        addOption(document.drop_list.SubCat, "TENKASI", "TENKASI");
        addOption(document.drop_list.SubCat, "THANJAVUR", "THANJAVUR");
        addOption(document.drop_list.SubCat, "THENI", "THENI");
        addOption(document.drop_list.SubCat, "THE NILGIRIS", "THE NILGIRIS");
        addOption(document.drop_list.SubCat, "THIRUVALLUR", "THIRUVALLUR");
        addOption(document.drop_list.SubCat, "THIRUVARUR", "THIRUVARUR");
        addOption(document.drop_list.SubCat, "TIRUCHIRAPPALLI", "TIRUCHIRAPPALLI");
        addOption(document.drop_list.SubCat, "TIRUNELVELI", "TIRUNELVELI");
        addOption(document.drop_list.SubCat, "Tirupathur", "Tirupathur");
        addOption(document.drop_list.SubCat, "TIRUPPUR", "TIRUPPUR");
        addOption(document.drop_list.SubCat, "TIRUVANNAMALAI", "TIRUVANNAMALAI");
        addOption(document.drop_list.SubCat, "TUTICORIN", "TUTICORIN");
        addOption(document.drop_list.SubCat, "VELLORE", "VELLORE");
        addOption(document.drop_list.SubCat, "VILLUPURAM", "VILLUPURAM");
        addOption(document.drop_list.SubCat, "VIRUDHUNAGAR", "VIRUDHUNAGAR");
    }
    if (document.drop_list.Category.value == 'TELANGANA') {
        addOption(document.drop_list.SubCat, "ADILABAD", "ADILABAD");
        addOption(document.drop_list.SubCat, "BHADRADRI KOTHAGUDEM", "BHADRADRI KOTHAGUDEM");
        addOption(document.drop_list.SubCat, "HYDERABAD", "HYDERABAD");
        addOption(document.drop_list.SubCat, "Jagitial", "Jagitial");
        addOption(document.drop_list.SubCat, "JANGOAN", "JANGOAN");
        addOption(document.drop_list.SubCat, "JAYASHANKAR BHUPALAPALLY", "JAYASHANKAR BHUPALAPALLY");
        addOption(document.drop_list.SubCat, "JOGULAMBA GADWAL", "JOGULAMBA GADWAL");
        addOption(document.drop_list.SubCat, "KAMAREDDY", "KAMAREDDY");
        addOption(document.drop_list.SubCat, "KARIMNAGAR", "KARIMNAGAR");
        addOption(document.drop_list.SubCat, "KHAMMAM", "KHAMMAM");
        addOption(document.drop_list.SubCat, "KUMURAM BHEEM ASIFABAD", "KUMURAM BHEEM ASIFABAD");
        addOption(document.drop_list.SubCat, "MAHABUBABAD", "MAHABUBABAD");
        addOption(document.drop_list.SubCat, "MAHABUBNAGAR", "MAHABUBNAGAR");
        addOption(document.drop_list.SubCat, "MANCHERIAL", "MANCHERIAL");
        addOption(document.drop_list.SubCat, "MEDAK", "MEDAK");
        addOption(document.drop_list.SubCat, "MEDCHAL MALKAJGIRI", "MEDCHAL MALKAJGIRI");
        addOption(document.drop_list.SubCat, "Mulugu", "Mulugu");
        addOption(document.drop_list.SubCat, "NAGARKURNOOL", "NAGARKURNOOL");
        addOption(document.drop_list.SubCat, "NALGONDA", "NALGONDA");
        addOption(document.drop_list.SubCat, "Narayanpet", "Narayanpet");
        addOption(document.drop_list.SubCat, "Nirmal", "Nirmal");
        addOption(document.drop_list.SubCat, "NIZAMABAD", "NIZAMABAD");
        addOption(document.drop_list.SubCat, "PEDDAPALLI", "PEDDAPALLI");
        addOption(document.drop_list.SubCat, "RAJANNA SIRCILLA", "RAJANNA SIRCILLA");
        addOption(document.drop_list.SubCat, "RANGA REDDY", "RANGA REDDY");
        addOption(document.drop_list.SubCat, "SANGAREDDY", "SANGAREDDY");
        addOption(document.drop_list.SubCat, "SIDDIPET", "SIDDIPET");
        addOption(document.drop_list.SubCat, "SURYAPET", "SURYAPET");
        addOption(document.drop_list.SubCat, "VIKARABAD", "VIKARABAD");
        addOption(document.drop_list.SubCat, "WANAPARTHY", "WANAPARTHY");
        addOption(document.drop_list.SubCat, "WARANGAL RURAL", "WARANGAL RURAL");
        addOption(document.drop_list.SubCat, "WARANGAL URBAN", "WARANGAL URBAN");
        addOption(document.drop_list.SubCat, "YADADRI BHUVANAGIRI", "YADADRI BHUVANAGIRI");
    }
    if (document.drop_list.Category.value == 'THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU') {
        addOption(document.drop_list.SubCat, "DADRA AND NAGAR HAVELI", "DADRA AND NAGAR HAVELI");
        addOption(document.drop_list.SubCat, "DAMAN", "DAMAN");
        addOption(document.drop_list.SubCat, "DIU", "DIU");
    }
    if (document.drop_list.Category.value == 'TRIPURA') {
        addOption(document.drop_list.SubCat, "Dhalai", "Dhalai");
        addOption(document.drop_list.SubCat, "Gomati", "Gomati");
        addOption(document.drop_list.SubCat, "Khowai", "Khowai");
        addOption(document.drop_list.SubCat, "North Tripura", "North Tripura");
        addOption(document.drop_list.SubCat, "Sepahijala", "Sepahijala");
        addOption(document.drop_list.SubCat, "South Tripura", "South Tripura");
        addOption(document.drop_list.SubCat, "Unakoti", "Unakoti");
        addOption(document.drop_list.SubCat, "West Tripura", "West Tripura");
    }
    if (document.drop_list.Category.value == 'UTTARAKHAND') {
        addOption(document.drop_list.SubCat, "ALMORA", "ALMORA");
        addOption(document.drop_list.SubCat, "BAGESHWAR", "BAGESHWAR");
        addOption(document.drop_list.SubCat, "CHAMOLI", "CHAMOLI");
        addOption(document.drop_list.SubCat, "CHAMPAWAT", "CHAMPAWAT");
        addOption(document.drop_list.SubCat, "DEHRADUN", "DEHRADUN");
        addOption(document.drop_list.SubCat, "HARIDWAR", "HARIDWAR");
        addOption(document.drop_list.SubCat, "NAINITAL", "NAINITAL");
        addOption(document.drop_list.SubCat, "PAURI GARHWAL", "PAURI GARHWAL");
        addOption(document.drop_list.SubCat, "PITHORAGARH", "PITHORAGARH");
        addOption(document.drop_list.SubCat, "RUDRA PRAYAG", "RUDRA PRAYAG");
        addOption(document.drop_list.SubCat, "TEHRI GARHWAL", "TEHRI GARHWAL");
        addOption(document.drop_list.SubCat, "UDAM SINGH NAGAR", "UDAM SINGH NAGAR");
        addOption(document.drop_list.SubCat, "UTTAR KASHI", "UTTAR KASHI");
    }
    if (document.drop_list.Category.value == 'UTTAR PRADESH') {
        addOption(document.drop_list.SubCat, "AGRA", "AGRA");
        addOption(document.drop_list.SubCat, "ALIGARH", "ALIGARH");
        addOption(document.drop_list.SubCat, "AMBEDKAR NAGAR", "AMBEDKAR NAGAR");
        addOption(document.drop_list.SubCat, "Amethi", "Amethi");
        addOption(document.drop_list.SubCat, "AMROHA", "AMROHA");
        addOption(document.drop_list.SubCat, "AURAIYA", "AURAIYA");
        addOption(document.drop_list.SubCat, "AYODHYA", "AYODHYA");
        addOption(document.drop_list.SubCat, "AZAMGARH", "AZAMGARH");
        addOption(document.drop_list.SubCat, "BAGHPAT", "BAGHPAT");
        addOption(document.drop_list.SubCat, "BAHRAICH", "BAHRAICH");
        addOption(document.drop_list.SubCat, "BALLIA", "BALLIA");
        addOption(document.drop_list.SubCat, "BALRAMPUR", "BALRAMPUR");
        addOption(document.drop_list.SubCat, "BANDA", "BANDA");
        addOption(document.drop_list.SubCat, "BARABANKI", "BARABANKI");
        addOption(document.drop_list.SubCat, "BAREILLY", "BAREILLY");
        addOption(document.drop_list.SubCat, "BASTI", "BASTI");
        addOption(document.drop_list.SubCat, "BHADOHI", "BHADOHI");
        addOption(document.drop_list.SubCat, "BIJNOR", "BIJNOR");
        addOption(document.drop_list.SubCat, "BUDAUN", "BUDAUN");
        addOption(document.drop_list.SubCat, "BULANDSHAHR", "BULANDSHAHR");
        addOption(document.drop_list.SubCat, "CHANDAULI", "CHANDAULI");
        addOption(document.drop_list.SubCat, "CHITRAKOOT", "CHITRAKOOT");
        addOption(document.drop_list.SubCat, "DEORIA", "DEORIA");
        addOption(document.drop_list.SubCat, "ETAH", "ETAH");
        addOption(document.drop_list.SubCat, "ETAWAH", "ETAWAH");
        addOption(document.drop_list.SubCat, "FARRUKHABAD", "FARRUKHABAD");
        addOption(document.drop_list.SubCat, "FATEHPUR", "FATEHPUR");
        addOption(document.drop_list.SubCat, "FIROZABAD", "FIROZABAD");
        addOption(document.drop_list.SubCat, "GAUTAM BUDDHA NAGAR", "GAUTAM BUDDHA NAGAR");
        addOption(document.drop_list.SubCat, "GHAZIABAD", "GHAZIABAD");
        addOption(document.drop_list.SubCat, "GHAZIPUR", "GHAZIPUR");
        addOption(document.drop_list.SubCat, "GONDA", "GONDA");
        addOption(document.drop_list.SubCat, "GORAKHPUR", "GORAKHPUR");
        addOption(document.drop_list.SubCat, "HAMIRPUR", "HAMIRPUR");
        addOption(document.drop_list.SubCat, "HAPUR", "HAPUR");
        addOption(document.drop_list.SubCat, "HARDOI", "HARDOI");
        addOption(document.drop_list.SubCat, "HATHRAS", "HATHRAS");
        addOption(document.drop_list.SubCat, "JALAUN", "JALAUN");
        addOption(document.drop_list.SubCat, "JAUNPUR", "JAUNPUR");
        addOption(document.drop_list.SubCat, "JHANSI", "JHANSI");
        addOption(document.drop_list.SubCat, "KANNAUJ", "KANNAUJ");
        addOption(document.drop_list.SubCat, "KANPUR DEHAT", "KANPUR DEHAT");
        addOption(document.drop_list.SubCat, "KANPUR NAGAR", "KANPUR NAGAR");
        addOption(document.drop_list.SubCat, "Kasganj", "Kasganj");
        addOption(document.drop_list.SubCat, "KAUSHAMBI", "KAUSHAMBI");
        addOption(document.drop_list.SubCat, "KHERI", "KHERI");
        addOption(document.drop_list.SubCat, "KUSHI NAGAR", "KUSHI NAGAR");
        addOption(document.drop_list.SubCat, "LALITPUR", "LALITPUR");
        addOption(document.drop_list.SubCat, "LUCKNOW", "LUCKNOW");
        addOption(document.drop_list.SubCat, "MAHARAJGANJ", "MAHARAJGANJ");
        addOption(document.drop_list.SubCat, "MAHOBA", "MAHOBA");
        addOption(document.drop_list.SubCat, "MAINPURI", "MAINPURI");
        addOption(document.drop_list.SubCat, "MATHURA", "MATHURA");
        addOption(document.drop_list.SubCat, "MAU", "MAU");
        addOption(document.drop_list.SubCat, "MEERUT", "MEERUT");
        addOption(document.drop_list.SubCat, "MIRZAPUR", "MIRZAPUR");
        addOption(document.drop_list.SubCat, "MORADABAD", "MORADABAD");
        addOption(document.drop_list.SubCat, "MUZAFFARNAGAR", "MUZAFFARNAGAR");
        addOption(document.drop_list.SubCat, "PILIBHIT", "PILIBHIT");
        addOption(document.drop_list.SubCat, "PRATAPGARH", "PRATAPGARH");
        addOption(document.drop_list.SubCat, "PRAYAGRAJ", "PRAYAGRAJ");
        addOption(document.drop_list.SubCat, "RAE BARELI", "RAE BARELI");
        addOption(document.drop_list.SubCat, "RAMPUR", "RAMPUR");
        addOption(document.drop_list.SubCat, "SAHARANPUR", "SAHARANPUR");
        addOption(document.drop_list.SubCat, "SAMBHAL", "SAMBHAL");
        addOption(document.drop_list.SubCat, "SANT KABEER NAGAR", "SANT KABEER NAGAR");
        addOption(document.drop_list.SubCat, "SHAHJAHANPUR", "SHAHJAHANPUR");
        addOption(document.drop_list.SubCat, "SHAMLI", "SHAMLI");
        addOption(document.drop_list.SubCat, "SHRAVASTI", "SHRAVASTI");
        addOption(document.drop_list.SubCat, "SIDDHARTH NAGAR", "SIDDHARTH NAGAR");
        addOption(document.drop_list.SubCat, "SITAPUR", "SITAPUR");
        addOption(document.drop_list.SubCat, "SONBHADRA", "SONBHADRA");
        addOption(document.drop_list.SubCat, "SULTANPUR", "SULTANPUR");
        addOption(document.drop_list.SubCat, "UNNAO", "UNNAO");
        addOption(document.drop_list.SubCat, "VARANASI", "VARANASI");
    }
    if (document.drop_list.Category.value == 'WEST BENGAL') {
        addOption(document.drop_list.SubCat, "24 PARAGANAS NORTH", "24 PARAGANAS NORTH");
        addOption(document.drop_list.SubCat, "24 PARAGANAS SOUTH", "24 PARAGANAS SOUTH");
        addOption(document.drop_list.SubCat, "Alipurduar", "Alipurduar");
        addOption(document.drop_list.SubCat, "BANKURA", "BANKURA");
        addOption(document.drop_list.SubCat, "BIRBHUM", "BIRBHUM");
        addOption(document.drop_list.SubCat, "COOCHBEHAR", "COOCHBEHAR");
        addOption(document.drop_list.SubCat, "DARJEELING", "DARJEELING");
        addOption(document.drop_list.SubCat, "DINAJPUR DAKSHIN", "DINAJPUR DAKSHIN");
        addOption(document.drop_list.SubCat, "DINAJPUR UTTAR", "DINAJPUR UTTAR");
        addOption(document.drop_list.SubCat, "HOOGHLY", "HOOGHLY");
        addOption(document.drop_list.SubCat, "HOWRAH", "HOWRAH");
        addOption(document.drop_list.SubCat, "JALPAIGURI", "JALPAIGURI");
        addOption(document.drop_list.SubCat, "Jhargram", "Jhargram");
        addOption(document.drop_list.SubCat, "KALIMPONG", "KALIMPONG");
        addOption(document.drop_list.SubCat, "KOLKATA", "KOLKATA");
        addOption(document.drop_list.SubCat, "MALDAH", "MALDAH");
        addOption(document.drop_list.SubCat, "MEDINIPUR EAST", "MEDINIPUR EAST");
        addOption(document.drop_list.SubCat, "MEDINIPUR WEST", "MEDINIPUR WEST");
        addOption(document.drop_list.SubCat, "MURSHIDABAD", "MURSHIDABAD");
        addOption(document.drop_list.SubCat, "NADIA", "NADIA");
        addOption(document.drop_list.SubCat, "PASCHIM BARDHAMAN", "PASCHIM BARDHAMAN");
        addOption(document.drop_list.SubCat, "PURBA BARDHAMAN", "PURBA BARDHAMAN");
        addOption(document.drop_list.SubCat, "PURULIA", "PURULIA");
    }
    // if (document.drop_list.Category.value == 'Fruits') {
    //     addOption(document.drop_list.SubCat, "Mango", "Mango");
    //     addOption(document.drop_list.SubCat, "Banana", "Banana");
    //     addOption(document.drop_list.SubCat, "Orange", "Orange");
    // }
    // if (document.drop_list.Category.value == 'Games') {
    //     addOption(document.drop_list.SubCat, "Cricket", "Cricket");
    //     addOption(document.drop_list.SubCat, "Football", "Football");
    //     addOption(document.drop_list.SubCat, "Polo", "Polo", "");
    // }
    // if (document.drop_list.Category.value == 'Scripts') {
    //     addOption(document.drop_list.SubCat, "PHP", "PHP");
    //     addOption(document.drop_list.SubCat, "ASP", "ASP");
    //     addOption(document.drop_list.SubCat, "Perl", "Perl");
    // }

}

function SelectSubSubCat() {
    // ON selection of category this function will work

    // removeAllOptions(document.drop_list.SubSubCat);
    addOption(document.drop_list.SubSubCat, "", "SubSubCat", "");

    // if (document.drop_list.Category.value == 'Fruits') {
    //     addOption(document.drop_list.SubSubCat, "Mango1", "Mango1");
    //     addOption(document.drop_list.SubSubCat, "Banana1", "Banana1");
    //     addOption(document.drop_list.SubSubCat, "Orange1", "Orange1");
    // }
    // if (document.drop_list.Category.value == 'Games') {
    //     addOption(document.drop_list.SubSubCat, "Cricket1", "Cricket1");
    //     addOption(document.drop_list.SubSubCat, "Football1", "Football1");
    //     addOption(document.drop_list.SubSubCat, "Polo1", "Polo1", "");
    // }
    // if (document.drop_list.Category.value == 'Scripts') {
    //     addOption(document.drop_list.SubSubCat, "PHP1", "PHP1");
    //     addOption(document.drop_list.SubSubCat, "ASP1", "ASP1");
    //     addOption(document.drop_list.SubSubCat, "Perl1", "Perl1");
    // }
    if (document.drop_list.Category.value == 'PURBA BARDHAMAN') {
        addOption(document.drop_list.SubSubCat, "Bahir Sarbamangala", "Bahir Sarbamangala");
        addOption(document.drop_list.SubSubCat, "Bardhaman", "Bardhaman");
        addOption(document.drop_list.SubSubCat, "Bud Bud", "Bud Bud");
        addOption(document.drop_list.SubSubCat, "Dainhat", "Dainhat");
        addOption(document.drop_list.SubSubCat, "Dhatrigram", "Dhatrigram");
        addOption(document.drop_list.SubSubCat, "Gangpur", "Gangpur");
        addOption(document.drop_list.SubSubCat, "Goda, Purba Bardhaman", "Goda, Purba Bardhaman");
        addOption(document.drop_list.SubSubCat, "Gopinathpur, West Bengal", "Gopinathpur, West Bengal");
        addOption(document.drop_list.SubSubCat, "Guskara", "Guskara");
        addOption(document.drop_list.SubSubCat, "Hatsimla", "Hatsimla");
        addOption(document.drop_list.SubSubCat, "Jaluidanga", "Jaluidanga");
        addOption(document.drop_list.SubSubCat, "Kalna City", "Kalna City");
        addOption(document.drop_list.SubSubCat, "Katwa", "Katwa");
        addOption(document.drop_list.SubSubCat, "Memari", "Memari");
        addOption(document.drop_list.SubSubCat, "Mirzapur, Bardhaman", "Mirzapur, Bardhaman");
        addOption(document.drop_list.SubSubCat, "Nari, Purba Bardhaman", "Nari, Purba Bardhaman");
        addOption(document.drop_list.SubSubCat, "Nasratpur", "Nasratpur");
        addOption(document.drop_list.SubSubCat, "Palsit", "Palsit");
        addOption(document.drop_list.SubSubCat, "Panuhat", "Panuhat");
        addOption(document.drop_list.SubSubCat, "Piarinagar", "Piarinagar");
        addOption(document.drop_list.SubSubCat, "Raipur, Purba Bardhaman", "Raipur, Purba Bardhaman");
        addOption(document.drop_list.SubSubCat, "Saktigarh, Bardhaman", "Saktigarh, Bardhaman");
        addOption(document.drop_list.SubSubCat, "Seharabazar", "Seharabazar");
        addOption(document.drop_list.SubSubCat, "Shashpur", "Shashpur");
        addOption(document.drop_list.SubSubCat, "Sribati", "Sribati");
        addOption(document.drop_list.SubSubCat, "Srirampur, Burdwan", "Srirampur, Burdwan");
        addOption(document.drop_list.SubSubCat, "Sukdal", "Sukdal");
        addOption(document.drop_list.SubSubCat, "Uttar Goara", "Uttar Goara");
    }
    if (document.drop_list.Category.value == 'PURULIA') {
        addOption(document.drop_list.SubSubCat, "Adra", "Adra");
        addOption(document.drop_list.SubSubCat, "Arra", "Arra");
        addOption(document.drop_list.SubSubCat, "Balarampur", "Balarampur");
        addOption(document.drop_list.SubSubCat, "Barabazar", "Barabazar");
        addOption(document.drop_list.SubSubCat, "Chapari", "Chapari");
        addOption(document.drop_list.SubSubCat, "Hijuli", "Hijuli");
        addOption(document.drop_list.SubSubCat, "Jhalda", "Jhalda");
        addOption(document.drop_list.SubSubCat, "Nabagram", "Nabagram");
        addOption(document.drop_list.SubSubCat, "Par Beliya", "Par Beliya");
        addOption(document.drop_list.SubSubCat, "Purulia", "Purulia");
        addOption(document.drop_list.SubSubCat, "Raghunathpur", "Raghunathpur");
        addOption(document.drop_list.SubSubCat, "S.T. Power Project Town", "S.T. Power Project Town");
    }

}
////////////////// 

function SelectSubSubSubCat() {
    // ON selection of category this function will work

    removeAllOptions(document.drop_list.SubSubSubCat);
    addOption(document.drop_list.SubSubSubCat, "", "Select City", "");

    // if (document.drop_list.Category.value == 'Fruits') {
    //     addOption(document.drop_list.SubSubCat, "Mango1", "Mango1");
    //     addOption(document.drop_list.SubSubCat, "Banana1", "Banana1");
    //     addOption(document.drop_list.SubSubCat, "Orange1", "Orange1");
    // }
    // if (document.drop_list.Category.value == 'Games') {
    //     addOption(document.drop_list.SubSubCat, "Cricket1", "Cricket1");
    //     addOption(document.drop_list.SubSubCat, "Football1", "Football1");
    //     addOption(document.drop_list.SubSubCat, "Polo1", "Polo1", "");
    // }
    // if (document.drop_list.Category.value == 'Scripts') {
    //     addOption(document.drop_list.SubSubCat, "PHP1", "PHP1");
    //     addOption(document.drop_list.SubSubCat, "ASP1", "ASP1");
    //     addOption(document.drop_list.SubSubCat, "Perl1", "Perl1");
    // }
    if (document.drop_list.Category.value == 'PURBA BARDHAMAN') {
        addOption(document.drop_list.SubSubCat, "Bahir Sarbamangala", "Bahir Sarbamangala");
        addOption(document.drop_list.SubSubCat, "Bardhaman", "Bardhaman");
        addOption(document.drop_list.SubSubCat, "Bud Bud", "Bud Bud");
        addOption(document.drop_list.SubSubCat, "Dainhat", "Dainhat");
        addOption(document.drop_list.SubSubCat, "Dhatrigram", "Dhatrigram");
        addOption(document.drop_list.SubSubCat, "Gangpur", "Gangpur");
        addOption(document.drop_list.SubSubCat, "Goda, Purba Bardhaman", "Goda, Purba Bardhaman");
        addOption(document.drop_list.SubSubCat, "Gopinathpur, West Bengal", "Gopinathpur, West Bengal");
        addOption(document.drop_list.SubSubCat, "Guskara", "Guskara");
        addOption(document.drop_list.SubSubCat, "Hatsimla", "Hatsimla");
        addOption(document.drop_list.SubSubCat, "Jaluidanga", "Jaluidanga");
        addOption(document.drop_list.SubSubCat, "Kalna City", "Kalna City");
        addOption(document.drop_list.SubSubCat, "Katwa", "Katwa");
        addOption(document.drop_list.SubSubCat, "Memari", "Memari");
        addOption(document.drop_list.SubSubCat, "Mirzapur, Bardhaman", "Mirzapur, Bardhaman");
        addOption(document.drop_list.SubSubCat, "Nari, Purba Bardhaman", "Nari, Purba Bardhaman");
        addOption(document.drop_list.SubSubCat, "Nasratpur", "Nasratpur");
        addOption(document.drop_list.SubSubCat, "Palsit", "Palsit");
        addOption(document.drop_list.SubSubCat, "Panuhat", "Panuhat");
        addOption(document.drop_list.SubSubCat, "Piarinagar", "Piarinagar");
        addOption(document.drop_list.SubSubCat, "Raipur, Purba Bardhaman", "Raipur, Purba Bardhaman");
        addOption(document.drop_list.SubSubCat, "Saktigarh, Bardhaman", "Saktigarh, Bardhaman");
        addOption(document.drop_list.SubSubCat, "Seharabazar", "Seharabazar");
        addOption(document.drop_list.SubSubCat, "Shashpur", "Shashpur");
        addOption(document.drop_list.SubSubCat, "Sribati", "Sribati");
        addOption(document.drop_list.SubSubCat, "Srirampur, Burdwan", "Srirampur, Burdwan");
        addOption(document.drop_list.SubSubCat, "Sukdal", "Sukdal");
        addOption(document.drop_list.SubSubCat, "Uttar Goara", "Uttar Goara");
    }
    if (document.drop_list.Category.value == 'PURULIA') {
        addOption(document.drop_list.SubSubCat, "Adra", "Adra");
        addOption(document.drop_list.SubSubCat, "Arra", "Arra");
        addOption(document.drop_list.SubSubCat, "Balarampur", "Balarampur");
        addOption(document.drop_list.SubSubCat, "Barabazar", "Barabazar");
        addOption(document.drop_list.SubSubCat, "Chapari", "Chapari");
        addOption(document.drop_list.SubSubCat, "Hijuli", "Hijuli");
        addOption(document.drop_list.SubSubCat, "Jhalda", "Jhalda");
        addOption(document.drop_list.SubSubCat, "Nabagram", "Nabagram");
        addOption(document.drop_list.SubSubCat, "Par Beliya", "Par Beliya");
        addOption(document.drop_list.SubSubCat, "Purulia", "Purulia");
        addOption(document.drop_list.SubSubCat, "Raghunathpur", "Raghunathpur");
        addOption(document.drop_list.SubSubCat, "S.T. Power Project Town", "S.T. Power Project Town");
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