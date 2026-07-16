"use client";

import { useMemo, useState } from "react";
import { journeyItems, years } from "@/content/journey";
import { JourneyCard } from "@/components/JourneyCard";

type Filter = "All" | (typeof years)[number];

export function JourneyExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = useMemo(
    () => (filter === "All" ? journeyItems : journeyItems.filter((item) => item.year === filter)),
    [filter],
  );

  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filter journey by year">
        {(["All", ...years] as Filter[]).map((year) => (
          <button
            type="button"
            key={year}
            className={filter === year ? "active" : undefined}
            onClick={() => setFilter(year)}
          >
            {year}
            <span>
              {year === "All"
                ? journeyItems.length
                : journeyItems.filter((item) => item.year === year).length}
            </span>
          </button>
        ))}
      </div>
      <div className="journey-grid">
        {items.map((item, index) => (
          <JourneyCard key={item.slug} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
