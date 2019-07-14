// get parallel requests for group of items

const companies = [
  'Ryanair',
  'SmartWings',
  'Norwegian'
];

const url = 'https://somewhere.com/companies';
 
// function to fetch fellow numbers
const fetchFellowNums = async (company) => {
  const response = await fetch(`${url}/${username}`);
  const json = await response.json();
  return json['follow__num'];
}

async function fetchAllRequests(companies) {
  const promises = companies.map(async company => {
    const count = await fetchPublicReposCount(company);
    return count;
  });
  return Promise.all(promises);
}