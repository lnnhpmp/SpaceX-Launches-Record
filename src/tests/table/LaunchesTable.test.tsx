import { describe, expect } from '@jest/globals'
import { LaunchesTable } from '../../components/table/LaunchesTable'
import { dummyLaunchesData } from '../testHelper'
import { render } from '@testing-library/react'

describe('LaunchesTable', () => {
  test('should render table', async () => {
    const { getByText } = await render(
      <LaunchesTable
        currentPageLaunches={dummyLaunchesData}
        launchesData={dummyLaunchesData}
        setLaunchesData={jest.fn()}
        setSortedData={jest.fn()}
      />,
    )
    // render columns
    expect(getByText('id')).toBeInTheDocument()
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Date')).toBeInTheDocument()
    expect(getByText('Succeeded')).toBeInTheDocument()
    expect(getByText('Details')).toBeInTheDocument()
    expect(getByText('Image')).toBeInTheDocument()
    expect(getByText('Youtube Link')).toBeInTheDocument()

    // render all rows on current page
    expect(getByText('FalconSat')).toBeInTheDocument()
    expect(getByText('DemoSat')).toBeInTheDocument()
    expect(getByText('Trailblazer')).toBeInTheDocument()
    expect(getByText('RatSat')).toBeInTheDocument()
    expect(getByText('RazakSat')).toBeInTheDocument()
  })
})
