
#include <string>
#include <vector>
using namespace std;

class Solution {
    
    inline static const string ALL_DIFFERENCE_INTEGER_ARRAYS_THE_SAME = "";

public:
    string oddString(const vector<string>& words) const {

        vector<int> first = createDifferenceIntegerVector(words[0]);
        vector<int> second = createDifferenceIntegerVector(words[1]);

        for (int i = 2; i < words.size(); ++i) {
            vector<int> current = createDifferenceIntegerVector(words[i]);
            if (first != current && second != current) {
                return words[i];
            }
            if (first != current) {
                return words[0];
            }
            if (second != current) {
                return words[1];
            }
        }
        return ALL_DIFFERENCE_INTEGER_ARRAYS_THE_SAME;
    }

private:                //Alternatively C++20: (string_view word)
    vector<int> createDifferenceIntegerVector(const string& word) const {
        vector<int> differenceIntegerVector(word.length() - 1);
        for (int i = 0; i < word.length() - 1; ++i) {
            differenceIntegerVector[i] = word[i + 1] - word[i];
        }
        return differenceIntegerVector;
    }
};
