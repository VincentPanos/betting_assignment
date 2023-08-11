import { Match } from "./types";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMemo } from "react";

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  outline: 0;
  border: none;
  background-color: #89cff0;
  &:hover {
    opacity: 0.7;
  }

  &.active {
    background-color: #41a051;
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.25rem;
    text-size: 12px;
  }
`;

const Placeholder = styled.span`
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const FilterBox = styled.div`
  * + * {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    * + * {
      margin-left: 0.15rem;
    }
  }
`;

const filterTypes = {
  all: "ALL",
  inprogress: "LIVE",
  notstarted: "UPCOMING",
  finished: "RESULT",
};

const filterNumbers = (matches: Match[]) => {
  let filterObj = {
    inprogress: 0,
    notstarted: 0,
    finished: 0,
  };

  Object.entries(filterObj).map(
    ([key]) =>
      (filterObj[key] = matches.reduce(
        (accumulator, currentValue) =>
          currentValue.status.type === key ? accumulator + 1 : accumulator,
        0
      ))
  );
  return { ...filterObj, all: matches.length };
};

const getClassName = (key: string): string => {
  const router = useRouter();
  const { filter } = router.query;

  if (!filter && key === "all") return "active";
  if (key === filter) return "active";

  return "";
};

function ButtonPlaceholder() {
  return (
    <FilterBox>
      {Object.entries(filterTypes).map(([key, value]) => (
        <FilterButton key={key}>
          <span>{value} (...)</span>
        </FilterButton>
      ))}
    </FilterBox>
  );
}

export function Filters({ matches }: { matches: Match[] }) {
  const router = useRouter();
  const numbers = useMemo(() => filterNumbers(matches), [matches]);

  if (matches.length === 0) return <ButtonPlaceholder />;
  return (
    <FilterBox>
      {Object.entries(filterTypes).map(([key, value]) => (
        <FilterButton
          key={key}
          className={getClassName(key)}
          onClick={() => {
            router.push({
              pathname: "/",
              query: { filter: key },
            });
          }}
        >
          <span>
            {value} ({numbers[key]})
          </span>
        </FilterButton>
      ))}
    </FilterBox>
  );
}
