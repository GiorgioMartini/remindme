import React from 'react'
import { ReminderProvider } from '../Reminders/ReminderContext'
import AddReminder from '../Reminders/AddReminder'
import { getCategories, getProviders } from '../../apis/remindMeAPI'
import { render, cleanup, fireEvent, wait, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'


jest.mock('../../apis/remindMeAPI', () => ({
  getCategories: jest.fn(),
  getProviders: jest.fn()
}))

const categories = [
  {
    id: "7c4907b2-6747-472d-bcd7-02a98aefff6a",
    categoryName: "Mobilfunk"
  },
  {
    id: "9ccf7b8e-fe05-4a98-bc74-3e3a394103e6",
    categoryName: "Strom"
  },
  {
    id: "9ccf7b8e-fe05-4a98-bc74-3e3a394103e6",
    categoryName: "Strom"
  }
];

const providers = [
  {
    id: "d2d8426d-94e2-4d64-99a6-da934026f073",
    company: {
      companyName: "123energie - eine Marke der Pfalzwerke AG"
    }
  },
  {
    id: "d2d8426d-94e2-4d64-99a6-da934026f073",
    company: {
      companyName: "AbcEnergie - Deine Marke der Werke OG"
    }
  }
]

beforeEach(() => {
  cleanup();
})

describe('<AddReminder />', () => {
  getCategories.mockImplementation(() => Promise.resolve(categories))
  getProviders.mockImplementation(() => Promise.resolve(providers))

  test('It fetches initial data correclty and populates the menu items', async () => {
    const { getAllByTestId, getByTestId, queryByTestId } = render(
      <ReminderProvider>
        <AddReminder />
      </ReminderProvider>
    )
    waitFor(() => [
      expect(queryByTestId('error')).toBeFalsy(),
      expect(getByTestId('categories-menu')).toBeTruthy(),
      expect(getAllByTestId('categories-menu-item')).toHaveLength(categories.length),
      categories.map((item, i) => expect(getAllByTestId('categories-menu-item')[i].textContent).toEqual(item.categoryName)),
    ])
  })

  test('It fetches the category providers and populates the providers select', async () => {
    const { getAllByTestId, getByTestId } = render(
      <ReminderProvider>
        <AddReminder />
      </ReminderProvider>
    )
    waitFor(() => [
      expect(getByTestId('categories-menu')).toBeTruthy(),
      fireEvent.change(getByTestId('categories-menu'), { target: { value: categories[0].id } }),
      expect(getAllByTestId('provider-menu')).toHaveLength(providers.length),
      providers.map((item, i) => expect(getAllByTestId('categories-menu-item')[i].textContent).toEqual(item.company.companyName)),
    ])
  })
})