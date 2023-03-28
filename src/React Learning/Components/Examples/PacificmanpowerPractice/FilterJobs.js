import React, { useState } from "react";

const FilterJobs = () => {
  const [filters, setFilters] = useState({});
  const [jobs, setJobs] = useState([]);

  function handleFilterChange(event) {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  }

  function handleSearch() {
    const filteredJobs = getFilteredJobs(filters);
    setJobs(filteredJobs);
  }

  function getFilteredJobs(filters) {
    const jobs = [
      {
        id: 1,
        title: "Software Engineer",
        location: "New York",
        jobType: "Full-time",
        experienceRange: "3-6 years",
        salary: 40000,
      },
      {
        id: 2,
        title: "Web Developer",
        location: "San Francisco",
        jobType: "Part-time",
        experienceRange: "0-3 years",
        salary: 10000,
      },
      {
        id: 3,
        title: "Data Scientist",
        location: "Los Angeles",
        jobType: "Full-time",
        experienceRange: "More than 6 years",
        salary: 120000,
      },
      {
        id: 4,
        title: "UI/UX Designer",
        location: "New York",
        jobType: "Internship",
        experienceRange: "No experience",
        salary: 30000,
      },
      {
        id: 5,
        title: "Frontend Developer",
        location: "San Francisco",
        jobType: "Full-time",
        experienceRange: "No experience",
        salary: 90000,
      },
      {
        id: 6,
        title: "Backend Engineer",
        location: "Los Angeles",
        jobType: "Part-time",
        experienceRange: "No experience",
        salary: 100000,
      },
    ];

    let filteredJobs = jobs;

    if (filters.location) {
      filteredJobs = filteredJobs.filter(
        (job) => job.location === filters.location
      );
    }

    if (filters.jobType) {
      filteredJobs = filteredJobs.filter(
        (job) => job.jobType === filters.jobType
      );
    }

    if (filters.experienceLevel) {
      filteredJobs = filteredJobs.filter(
        (job) => job.experienceLevel === filters.experienceLevel
      );
    }

    if (filters.salaryRange) {
      filteredJobs = filteredJobs.filter(
        (job) => job.salary >= filters.salaryRange
      );
    }
    // if (filters.experienceRange && filters.experienceRange.length > 0) {
    //   filteredJobs = filteredJobs.filter((job) =>
    //     filters.experienceRange.includes(job.experienceRange.toString())
    //   );
    // }
    if (filters.experienceRange && filters.experienceRange.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        filters.experienceRange.includes(job.experienceRange)
      );
    }

    return filteredJobs;
  }

  return (
    <>
      <div>
        <input type="text" name="location" onChange={handleFilterChange} />
        <select name="jobType" onChange={handleFilterChange}>
          <option value="">Select job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
        </select>
        <select name="salaryRange" onChange={handleFilterChange}>
          <option value="">Select salary range</option>
          <option value="30000">30,000 or more</option>
          <option value="50000">50,000 or more</option>
          <option value="80000">80,000 or more</option>
          <option value="90000">90,000 or more</option>
          <option value="100000">100,000 or more</option>
          <option value="120000">120,000 or more</option>
        </select>
        <div>
          <h3>Experience Range</h3>
          <input
            type="checkbox"
            name="experienceRange"
            value="No experience"
            onChange={handleFilterChange}
          />
          <label>No experience</label>
          <br />
          <input
            type="checkbox"
            name="experienceRange"
            value="0-3 years"
            onChange={handleFilterChange}
          />
          <label>0-3 years</label>
          <br />
          <input
            type="checkbox"
            name="experienceRange"
            value="3-6 years"
            onChange={handleFilterChange}
          />
          <label>3-6 years</label>
          <br />
          <input
            type="checkbox"
            name="experienceRange"
            value="More than 6 years"
            onChange={handleFilterChange}
          />
          <label>More than 6 years</label>
          <br />
        </div>

        <button onClick={handleSearch}>Search</button>

        {jobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.jobType}</p>
              <p>{job.experienceRange}</p>
              <p>{job.salary}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FilterJobs;
