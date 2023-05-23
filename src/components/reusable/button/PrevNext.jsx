import { useRouter } from 'next/router';

export default function PrevNext({ page, pageDevInfo }) {
  const router = useRouter();

  // handle click
  const handlePrev = () => {
    router.push(`/devotion?page=${Number(page) - 1}`);
  };

  const handleNext = () => {
    router.push(`/devotion?page=${Number(page) + 1}`);
  };
  return (
    <div className='prevNext'>
      <button
        className={`viewMore ${page <= 1 ? 'butDis' : ''}`}
        onClick={handlePrev} disabled={page <= 1}
      >
        Previous
      </button>
      <button
        className={`viewMore ml-[10px] smn:ml-[20px] ${
          pageDevInfo.pageInfo.hasNextPage ? '' : 'butDis'
        }`}
        onClick={handleNext}
        disabled={pageDevInfo.pageInfo.hasNextPage == false}
      >
        Next
      </button>
    </div>
  );
}
