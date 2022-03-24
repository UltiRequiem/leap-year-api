package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"time"
)

type IsLeapYear struct {
	leapYear bool
}

func main() {
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	randomNumber := random.Intn(1000)
	apiURL := "https://leap.deno.dev"

	resp, _ := http.Get(fmt.Sprintf("%s%d", apiURL, randomNumber))

	body, _ := ioutil.ReadAll(resp.Body)

	var isLeapYear IsLeapYear

	json.Unmarshal(body, &isLeapYear)

	fmt.Printf("Is %d a leap year? %t\n", randomNumber, isLeapYear.leapYear)
}
