import requests
import os
import time

scientists = [
    ('marie-curie', 'Marie Curie'),
    ('lise-meitner', 'Lise Meitner'),
    ('chien-shiung-wu', 'Chien-Shiung Wu'),
    ('canan-dagdeviren', 'Canan Dağdeviren'),
    ('turkan-saylan', 'Türkan Saylan'),
    ('rosalind-franklin', 'Rosalind Franklin'),
    ('elizabeth-blackwell', 'Elizabeth Blackwell'),
    ('tu-youyou', 'Tu Youyou'),
    ('ada-lovelace', 'Ada Lovelace'),
    ('grace-hopper', 'Grace Hopper'),
    ('margaret-hamilton', 'Margaret Hamilton (software engineer)'),
    ('dilhan-eryurt', 'Dilhan Eryurt'),
    ('katherine-johnson', 'Katherine Johnson'),
    ('valentina-tereshkova', 'Valentina Tereshkova'),
    ('sally-ride', 'Sally Ride'),
    ('remziye-hisar', 'Remziye Hisar'),
    ('rachel-carson', 'Rachel Carson'),
    ('barbara-mcclintock', 'Barbara McClintock'),
    ('dorothy-hodgkin', 'Dorothy Hodgkin')
]

# Hardcoded backups for tricky ones
backups = {
    'remziye-hisar': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Remziye_Hisar.jpg',
    'dilhan-eryurt': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Dilhan_Eryurt_and_Goddard_Institute_colleagues.jpg',
    'canan-dagdeviren': 'https://bogazicindebilim.bogazici.edu.tr/sites/science.boun.edu.tr/files/2_4.jpg' 
}

output_dir = "public/images/scientists"
os.makedirs(output_dir, exist_ok=True)

S = requests.Session()
S.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
})
URL = "https://en.wikipedia.org/w/api.php"
URL_TR = "https://tr.wikipedia.org/w/api.php"

def fetch_image_api(name, lang='en'):
    api_url = URL if lang == 'en' else URL_TR
    PARAMS = {
        "action": "query",
        "format": "json",
        "prop": "pageimages",
        "titles": name,
        "pithumbsize": 800
    }
    try:
        R = S.get(url=api_url, params=PARAMS)
        DATA = R.json()
        pages = DATA["query"]["pages"]
        for k, v in pages.items():
            if "thumbnail" in v:
                return v["thumbnail"]["source"]
    except:
        pass
    return None

print("Fetching images via API (Smart Mode)...")
for s_id, name in scientists:
    filepath = f"{output_dir}/{s_id}.jpg"
    
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        print(f"Skipping {name} (Already exists)")
        continue

    print(f"Processing {name}...", end='')
    
    img_url = backups.get(s_id)
    if not img_url:
        img_url = fetch_image_api(name, 'en')
        if not img_url:
            img_url = fetch_image_api(name, 'tr')

    if img_url:
        try:
            r = S.get(img_url, timeout=15)
            if r.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(r.content)
                print(f" SAVED")
            else:
                print(f" FAIL HTTP {r.status_code}")
        except Exception as e:
            print(f" ERROR: {e}")
    else:
        print(" NOT FOUND")
    
    time.sleep(1.5) # Be nice to API
