import requests

urls = [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Dagdeviren_in_front_of_YellowBox.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Dilhan_Eryurt.jpg",
    "https://tr.wikipedia.org/wiki/Special:FilePath/Remziye_Hisar.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rosalind_Franklin.jpg"
]

print("Resolving URLs...")
for url in urls:
    try:
        r = requests.head(url, allow_redirects=True)
        print(f"ORIG: {url}")
        print(f"FINAL: {r.url}")
        print("-" * 20)
    except Exception as e:
        print(f"Error resolving {url}: {e}")
