import requests
import os

# Map existing IDs to the URLs we want to use
scientists = {
    'marie-curie': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg',
    'lise-meitner': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Lise_Meitner12.jpg',
    'chien-shiung-wu': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Chien-Shiung_Wu_%281912-1997%29_in_1963_-_Restoration.jpg',
    'canan-dagdeviren': 'https://bogazicindebilim.bogazici.edu.tr/sites/science.boun.edu.tr/files/2_4.jpg',
    'turkan-saylan': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Turkan_Saylan.jpg',
    'rosalind-franklin': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rosalind_Franklin_%28retouched%29.jpg',
    'elizabeth-blackwell': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Elizabeth_Blackwell_1859.jpg',
    'tu-youyou': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Tu_Youyou_2015_Nobel_Press_Conference.jpg',
    'ada-lovelace': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
    'grace-hopper': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
    'margaret-hamilton': 'https://upload.wikimedia.org/wikipedia/commons/6/68/Margaret_Hamilton_1995.jpg',
    'dilhan-eryurt': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Dilhan_Eryurt_and_Goddard_Institute_colleagues.jpg',
    'katherine-johnson': 'https://upload.wikimedia.org/wikipedia/commons/6/62/Katherine_Johnson_at_NASA%2C_in_1966.jpg',
    'valentina-tereshkova': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Valentina_Tereshkova_WFP_2017_%28cropped%29.jpg',
    'sally-ride': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Sally_Ride_in_1984.jpg',
    'remziye-hisar': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Remziye_Hisar.jpg',
    'rachel-carson': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Rachel_Carson.jpg',
    'barbara-mcclintock': 'https://upload.wikimedia.org/wikipedia/commons/5/58/Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg',
    'dorothy-hodgkin': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dorothy_Hodgkin_Nobel.jpg'
}

output_dir = "public/images/scientists"
os.makedirs(output_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
}

print("Downloading images...")
for s_id, url in scientists.items():
    try:
        ext = url.split('.')[-1].split('?')[0]
        if len(ext) > 4: ext = 'jpg' # fallback
        filename = f"{s_id}.{ext}"
        filepath = os.path.join(output_dir, filename)
        
        print(f"Downloading {s_id}...", end='')
        r = requests.get(url, headers=headers, timeout=10)
        if r.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(r.content)
            print("OK")
        else:
            print(f"FAIL ({r.status_code})")
    except Exception as e:
        print(f"ERROR: {e}")
