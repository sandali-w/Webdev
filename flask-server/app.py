import json
import os
from flask import Flask, jsonify, request

app = Flask(__name__)

DICT_FILE = os.path.join(os.path.dirname(__file__), "dictionary.json")


def is_prime_number(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i = i + 2
    return True


def load_dictionary():
    with open(DICT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    return {k.lower(): v for k, v in data.items()}


def save_dictionary(data):
    with open(DICT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


# 1. Prime number endpoint (4p)
# Example: http://127.0.0.1:3000/prime_number/31
@app.route("/prime_number/<int:number>", methods=["GET"])
def check_prime(number):
    result = is_prime_number(number)
    return jsonify({"Number": number, "isPrime": result})


# 2. Translate endpoint (10p)
# Example: http://127.0.0.1:3000/translate/hello
@app.route("/translate/<word>", methods=["GET"])
def translate_word(word):
    lookup_word = word.lower()
    dictionary = load_dictionary()
    if lookup_word in dictionary:
        return jsonify({
            "English": lookup_word,
            "Finnish": dictionary[lookup_word]
        })
    return jsonify({"error": "Word not found"}), 404


# Optional: List all available English words
@app.route("/words", methods=["GET"])
def get_words():
    dictionary = load_dictionary()
    return jsonify(list(dictionary.keys()))


# 3. Add new word endpoint (6p)
# Example: http://127.0.0.1:3000/add?en=book&fi=kirja
@app.route("/add", methods=["GET", "POST"])
def add_word():
    en = request.args.get("en") or (request.json.get("en") if request.is_json else None)
    fi = request.args.get("fi") or (request.json.get("fi") if request.is_json else None)

    if not en or not fi:
        return jsonify({"error": "Both 'en' and 'fi' are required"}), 400

    dictionary = load_dictionary()
    dictionary[en.lower()] = fi
    save_dictionary(dictionary)
    return jsonify({
        "English": en.lower(),
        "Finnish": fi,
        "status": "added"
    })


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)