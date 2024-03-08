import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    # import requests
# from functions.online_ops import find_my_ip, get_latest_news, get_random_advice, get_random_joke, get_trending_movies, get_weather_report, play_on_youtube, search_on_google, search_on_wikipedia, send_email, send_whatsapp_message
# import pyttsx3
# import speech_recognition as sr
# from decouple import config
# from datetime import datetime
# from functions.os_ops import open_calculator, open_camera, open_cmd, open_notepad, open_discord
# from random import choice
# from utils import opening_text
# from pprint import pprint


# USERNAME = config('USER')
# BOTNAME = config('BOTNAME')


# engine = pyttsx3.init('sapi5')

# Set Rate
# engine.setProperty('rate', 190)

# Set Volume
# engine.setProperty('volume', 1.0)

# Set Voice (Female)
# voices = engine.getProperty('voices')
# engine.setProperty('voice', voices[1].id)


# Text to Speech Conversion
# def speak(text):
    # """Used to speak whatever text is passed to it"""

    # engine.say(text)
    # engine.runAndWait()


# Greet the user
# def greet_user():
    # """Greets the user according to the time"""
    
    # hour = datetime.now().hour
    # if (hour >= 6) and (hour < 12):
        # speak(f"Good Morning {USERNAME}")
    # elif (hour >= 12) and (hour < 16):
        # speak(f"Good afternoon {USERNAME}")
    # elif (hour >= 16) and (hour < 19):
        # speak(f"Good Evening {USERNAME}")
    # speak(f"I am {BOTNAME}. How may I assist you?")


# Takes Input from User
# def take_user_input():
    # """Takes user input, recognizes it using Speech Recognition module and converts it into text"""
    
    # r = sr.Recognizer()
    # with sr.Microphone() as source:
        # print('Listening....')
        # r.pause_threshold = 1
        # audio = r.listen(source)

    # try:
        # print('Recognizing...')
        # query = r.recognize_google(audio, language='en-in')
        # if not 'exit' in query or 'stop' in query:
            # speak(choice(opening_text))
        # else:
            # hour = datetime.now().hour
            # if hour >= 21 and hour < 6:
                # speak("Good night sir, take care!")
            # else:
                # speak('Have a good day sir!')
            # exit()
    # except Exception:
        # speak('Sorry, I could not understand. Could you please say that again?')
        # query = 'None'
    # return query


# if __name__ == '__main__':
    # greet_user()
    # while True:
        # query = take_user_input().lower()

        # if 'open notepad' in query:
            # open_notepad()

        # elif 'open discord' in query:
            # open_discord()

        # elif 'open command prompt' in query or 'open cmd' in query:
            # open_cmd()

        # elif 'open camera' in query:
            # open_camera()

        # elif 'open calculator' in query:
            # open_calculator()

        # elif 'ip address' in query:
            # ip_address = find_my_ip()
            # speak(f'Your IP Address is {ip_address}.\n For your convenience, I am printing it on the screen sir.')
            # print(f'Your IP Address is {ip_address}')

        # elif 'wikipedia' in query:
            # speak('What do you want to search on Wikipedia, sir?')
            # search_query = take_user_input().lower()
            # results = search_on_wikipedia(search_query)
            # speak(f"According to Wikipedia, {results}")
            # speak("For your convenience, I am printing it on the screen sir.")
            # print(results)

        # elif 'youtube' in query:
            # speak('What do you want to play on Youtube, sir?')
            # video = take_user_input().lower()
            # play_on_youtube(video)

        # elif 'search on google' in query:
            # speak('What do you want to search on Google, sir?')
            # query = take_user_input().lower()
            # search_on_google(query)

        # elif "send whatsapp message" in query:
            # speak(
                # 'On what number should I send the message sir? Please enter in the console: ')
            # number = input("Enter the number: ")
            # speak("What is the message sir?")
            # message = take_user_input().lower()
            # send_whatsapp_message(number, message)
            # speak("I've sent the message sir.")

        # elif "send an email" in query:
            # speak("On what email address do I send sir? Please enter in the console: ")
            # receiver_address = input("Enter email address: ")
            # speak("What should be the subject sir?")
            # subject = take_user_input().capitalize()
            # speak("What is the message sir?")
            # message = take_user_input().capitalize()
            # if send_email(receiver_address, subject, message):
                # speak("I've sent the email sir.")
            # else:
                # speak("Something went wrong while I was sending the mail. Please check the error logs sir.")

        # elif 'joke' in query:
            # speak(f"Hope you like this one sir")
            # joke = get_random_joke()
            # speak(joke)
            # speak("For your convenience, I am printing it on the screen sir.")
            # pprint(joke)

        # elif "advice" in query:
            # speak(f"Here's an advice for you, sir")
            # advice = get_random_advice()
            # speak(advice)
            # speak("For your convenience, I am printing it on the screen sir.")
            # pprint(advice)

        # elif "trending movies" in query:
            # speak(f"Some of the trending movies are: {get_trending_movies()}")
            # speak("For your convenience, I am printing it on the screen sir.")
            # print(*get_trending_movies(), sep='\n')

        # elif 'news' in query:
            # speak(f"I'm reading out the latest news headlines, sir")
            # speak(get_latest_news())
            # speak("For your convenience, I am printing it on the screen sir.")
            # print(*get_latest_news(), sep='\n')

        # elif 'weather' in query:
            # ip_address = find_my_ip()
            # city = requests.get(f"https://ipapi.co/{ip_address}/city/").text
            # speak(f"Getting weather report for your city {city}")
            # weather, temperature, feels_like = get_weather_report(city)
            # speak(f"The current temperature is {temperature}, but it feels like {feels_like}")
            # speak(f"Also, the weather report talks about {weather}")
            # speak("For your convenience, I am printing it on the screen sir.")
            # print(f"Description: {weather}\nTemperature: {temperature}\nFeels like: {feels_like}")






import pyttsx3 #pip install pyttsx3
import speech_recognition as sr #pip install speechRecognition
import datetime
import wikipedia #pip install wikipedia
import webbrowser
import os
import smtplib

print("Initializing Jarvis")
MASTER = "ARUN"

engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)
#Speak function will speak/Pronounce the string which is passed to it
# def speak(text):
    # engine.say(text)
    # engine.runAndWait()

#This funtion will wish you as per the current time
def wishMe():
    hour = int(datetime.datetime.now().hour)
    print(hour)

    if hour>=0 and hour <12:
        speak("good morning" + MASTER)

    elif hour>=12 and hour<18:
        speak("good afternoon" + MASTER)

    else:
        speak("good Evening" + MASTER)

    speak("i am your assistant. How may I help you?")

def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('kumaraman.rose@gmail.ocm', 'password')
    server.sendmail("harry@gmail.com", to, content)
    server.close()

    # 



#This function will take command from the microphone
def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = r.listen(source)

    try :
        print("Recognizing...")
        query = r.recognize_google(audio, language = 'en-in')
        print(f"user said: {query}\n")

    except Exception as e:
        print("Say that again please...")
        query = None

    return query

#main program starting
def main():
    speak("Initializing Jarvis...")
    wishMe()
    query = takeCommand()

    #Logic for executing tasks as per the query
    if 'wikipedia' in query.lower():
        speak('searching wikipedia...')
        query = query.replace("wikipedia", "")
        results = wikipedia.summary(query, sentences =2)
        print(results)
        speak(results)

    elif 'open youtube' in query.lower():
        #webbrowser.open('youtube.com')
        url = "youtube.com"
        chrome_path = 'c:/program Files (x86)/Google/Chrome/Application/chrome.exe %s'
        webbrowser.get(chrome_path).open(url)

    elif 'open google' in query.lower():
        #webbrowser.open('youtube.com')
        url = "google.com"
        chrome_path = 'c:/program Files (x86)/Google/Chrome/Application/chrome.exe %s'
        webbrowser.get(chrome_path).open(url)

    elif 'play music' in query.lower():
        songs_dir = "C:\\Users\\Dell\\Desktop\\Photos\\audio"
        songs = os.listdir(songs_dir)
        print(songs)
        os.startfile(os.path.join(songs_dir, songs[0]))

    elif 'the time' in query.lower():
        strTime = datetime.datetime.now().strftime("%H:%M:%S")
        speak(f"{MASTER} the time is {strTime}")

    elif 'open code' in query.lower():
        codePath = "C:\\Users\\Dell\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
        os.startfile(codePath)
    # 
    elif 'email to raj' in query.lower():
        try:
            speak("what should i send")
            content = takeCommand()
            to = "harry@gmail.ocm"
            sendEmail(to, content)
            speak("Email has been sent to raj")
        except Exception as e:
            print(e)


main()

    return (
        <> 
            <div className="container">
                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>
                <div className="btn-style">
                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                </div>
            </div>
        </>
    );
};

export default App;






